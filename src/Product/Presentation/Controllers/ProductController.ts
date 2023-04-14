import IProductDomain from '../../Domain/Entities/IProductDomain';

import SaveProductUseCase from '../../Domain/UseCases/Product/SaveProductUseCase';
import DeleteProductUseCase from '../../Domain/UseCases/Product/DeleteProductUseCase';
import GetProductUseCase from '../../Domain/UseCases/Product/GetProductUseCase';
import ListProductsUseCase from '../../Domain/UseCases/Product/ListProductsUseCase';
import UpdateProductUseCase from '../../Domain/UseCases/Product/UpdateProductUseCase';
import ValidatorSchema from '../../../Shared/Presentation/Shared/ValidatorSchema';
import ProductSchemaSaveValidator from '../Validations/ProductSchemaSaveValidator';
import ProductRepPayload from '../../Domain/Payloads/ProductRepPayload';
import IdPayload from '../../../Shared/Presentation/Requests/IdPayload';
import ProductUpdatePayload from '../../Domain/Payloads/ProductUpdatePayload';
import ProductSavePayload from '../../Domain/Payloads/ProductSavePayload';
import ICriteria from '../../../Shared/Presentation/Requests/ICriteria';
import IPaginator from '../../../Shared/Infrastructure/Orm/IPaginator';
import GetByCategoryUseCase from '../../Domain/UseCases/Product/GetByCategoryUseCase';
import CriteriaPayload from '../../../Shared/Presentation/Validations/CriteriaPayload';
import CriteriaSchemaValidation from '../../../Shared/Presentation/Validations/CriteriaSchemaValidation';
import Pagination from '../../../Shared/Presentation/Shared/Pagination';
import IdSchemaValidation from '../../../Shared/Presentation/Validations/IdSchemaValidation';
import RequestCriteria from '../../../Shared/Presentation/Requests/RequestCriteria';
import ProductFilter from '../Criterias/ProductFilter';
import ProductSort from '../Criterias/ProductSort';

class ProductController {
  public async save(payload: ProductSavePayload): Promise<IProductDomain> {
    await ValidatorSchema.handle(ProductSchemaSaveValidator, payload);
    const useCase = new SaveProductUseCase();
    return await useCase.handle(payload);
  }

  public async list(payload: CriteriaPayload): Promise<IPaginator> {
    await ValidatorSchema.handle(CriteriaSchemaValidation, payload);
    const requestCriteria: ICriteria = new RequestCriteria({
      filter: new ProductFilter(payload.query),
      sort: new ProductSort(payload.query),
      pagination: new Pagination(payload.query, payload.url),
    });

    const useCase = new ListProductsUseCase();
    return await useCase.handle(requestCriteria);
  }

  public async getOne(payload: IdPayload): Promise<IProductDomain> {
    await ValidatorSchema.handle(IdSchemaValidation, payload);

    const useCase = new GetProductUseCase();
    return await useCase.handle(payload);
  }

  public async getByCategory(payload: IdPayload): Promise<IProductDomain[]> {
    await ValidatorSchema.handle(IdSchemaValidation, payload);
    const useCase = new GetByCategoryUseCase();
    return await useCase.handle(payload);
  }
  public async update(payload: ProductUpdatePayload): Promise<IProductDomain> {
    await ValidatorSchema.handle(ProductSchemaSaveValidator, payload);

    const useCase = new UpdateProductUseCase();
    return await useCase.handle(payload);
  }

  public async remove(payload: IdPayload): Promise<IProductDomain> {
    await ValidatorSchema.handle(IdSchemaValidation, payload);

    const useCase = new DeleteProductUseCase();
    return await useCase.handle(payload);
  }
}

export default ProductController;
