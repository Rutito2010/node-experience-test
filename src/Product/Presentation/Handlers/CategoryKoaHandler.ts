import { DefaultContext } from 'koa';
import Router from 'koa-router';
import MainConfig from '../../../Config/MainConfig';

import KoaResponder from '../../../Shared/Application/Http/KoaResponder';
import ICategoryDomain from '../../Domain/Entities/ICategoryDomain';
import CategoryTransformer from '../Transformers/CategoryTransformer';
import CategoryController from '../Controllers/CategoryController';
import AuthorizeKoaMiddleware from '../../../Auth/Presentation/Middlewares/AuthorizeKoaMiddleware';
import Permissions from '../../../Config/Permissions';
import ResponseMessageEnum from '../../../Shared/Domain/Enum/ResponseMessageEnum';
import DefaultMessageTransformer from '../../../Shared/Presentation/Transformers/DefaultMessageTransformer';
import CategoryRepPayload from '../../Domain/Payloads/CategoryRepPayload';
import CriteriaPayload from '../../../Shared/Presentation/Validations/CriteriaPayload';
import IdPayload from '../../../Shared/Presentation/Requests/IdPayload';
import CategoryUpdatePayload from '../../Domain/Payloads/CategoryUpdatePayload';

const routerOpts: Router.IRouterOptions = {
  prefix: '/api/categories',
};

const CategoryKoaHandler: Router = new Router(routerOpts);
const responder: KoaResponder = new KoaResponder();
const controller = new CategoryController();
const config = MainConfig.getInstance().getConfig().statusCode;

CategoryKoaHandler.post(
  '/',
  AuthorizeKoaMiddleware(Permissions.ROLES_SAVE),
  async (ctx: DefaultContext) => {
    const Category: ICategoryDomain = await controller.save(
      ctx.request.body as CategoryRepPayload
    );

    void (await responder.send(
      Category,
      ctx,
      config['HTTP_CREATED'],
      new DefaultMessageTransformer(ResponseMessageEnum.CREATED)
    ));
  }
);

CategoryKoaHandler.get(
  '/',
  AuthorizeKoaMiddleware(Permissions.ROLES_LIST),
  async (ctx: DefaultContext) => {
    const categories: ICategoryDomain[] = await controller.list();

    await responder.send(
      categories,
      ctx,
      config['HTTP_OK'],
      new CategoryTransformer()
    );
  }
);

CategoryKoaHandler.get(
  '/:id',
  AuthorizeKoaMiddleware(Permissions.ROLES_SHOW),
  async (ctx: DefaultContext) => {
    const Category: ICategoryDomain = await controller.getOne(
      ctx.params as IdPayload
    );

    void (await responder.send(
      Category,
      ctx,
      config['HTTP_OK'],
      new CategoryTransformer()
    ));
  }
);

CategoryKoaHandler.put(
  '/:id',
  AuthorizeKoaMiddleware(Permissions.ROLES_UPDATE),
  async (ctx: DefaultContext) => {
    const data: CategoryUpdatePayload = {
      id: ctx.params.id,
      ...ctx.request.body,
    };

    const Category: ICategoryDomain = await controller.update(data);

    void (await responder.send(
      Category,
      ctx,
      config['HTTP_CREATED'],
      new DefaultMessageTransformer(ResponseMessageEnum.UPDATED)
    ));
  }
);

CategoryKoaHandler.delete(
  '/:id',
  AuthorizeKoaMiddleware(Permissions.ROLES_DELETE),
  async (ctx: DefaultContext) => {
    const Category: ICategoryDomain = await controller.remove(
      ctx.params as IdPayload
    );

    void (await responder.send(
      Category,
      ctx,
      config['HTTP_CREATED'],
      new CategoryTransformer()
    ));
  }
);

export default CategoryKoaHandler;
