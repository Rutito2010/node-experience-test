import ICategoryDomain from '../../Domain/Entities/ICategoryDomain';

import SaveCategoryUseCase from '../../Domain/UseCases/Category/SaveCategoryUseCase';
import DeleteCategoryUseCase from '../../Domain/UseCases/Category/RemoveCategoryUseCase';
import GetCategoryUseCase from '../../Domain/UseCases/Category/GetCategoryUseCase';
import ListCategorysUseCase from '../../Domain/UseCases/Category/ListCategoryUseCase';
import UpdateCategoryUseCase from '../../Domain/UseCases/Category/UpdateCategoryUseCase';
import ValidatorSchema from '../../../Shared/Presentation/Shared/ValidatorSchema';
import CategoryRepPayload from '../../Domain/Payloads/CategoryRepPayload';
import IdPayload from '../../../Shared/Presentation/Requests/IdPayload';
import CategoryUpdatePayload from '../../Domain/Payloads/CategoryUpdatePayload';

import CriteriaSchemaValidation from '../../../Shared/Presentation/Validations/CriteriaSchemaValidation';

import IdSchemaValidation from '../../../Shared/Presentation/Validations/IdSchemaValidation';

class CategoryController {
  public async save(payload: CategoryRepPayload): Promise<ICategoryDomain> {
    const useCase = new SaveCategoryUseCase();
    return await useCase.handle(payload);
  }

  public async list(): Promise<ICategoryDomain[]> {
    const useCase = new ListCategorysUseCase();
    return await useCase.handle();
  }

  public async getOne(payload: IdPayload): Promise<ICategoryDomain> {
    // await ValidatorSchema.handle(IdSchemaValidation, payload);

    const useCase = new GetCategoryUseCase();
    return await useCase.handle(payload);
  }

  public async update(
    payload: CategoryUpdatePayload
  ): Promise<ICategoryDomain> {
    // await ValidatorSchema.handle(ItemSchemaUpdateValidation, payload);

    const useCase = new UpdateCategoryUseCase();
    return await useCase.handle(payload);
  }

  public async remove(payload: IdPayload): Promise<ICategoryDomain> {
    // await ValidatorSchema.handle(IdSchemaValidation, payload);

    const useCase = new DeleteCategoryUseCase();
    return await useCase.handle(payload);
  }
}

export default CategoryController;
