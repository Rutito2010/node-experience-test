import CategoryRepPayload from '../../Payloads/CategoryRepPayload';
import ICategoryDomain from '../../Entities/ICategoryDomain';
import { REPOSITORIES } from '../../../../Config/Injects';
import ICategoryRepository from '../../../Infrastructure/Repositories/ICategoryRepository';
import Category from '../../Entities/Category';
import { getRequestContext } from '../../../../Shared/Presentation/Shared/RequestContext';

class SaveRoleUseCase {
  private repository: ICategoryRepository;

  constructor() {
    const { container } = getRequestContext();
    this.repository = container.resolve<ICategoryRepository>(
      REPOSITORIES.ICategoryRepository
    );
  }

  async handle(payload: CategoryRepPayload): Promise<ICategoryDomain> {
    const checkCategory = await this.repository.getByName(payload.name);
    if (checkCategory) {
      return checkCategory;
    } else {
      const category = new Category(payload);
      return await this.repository.save(category);
    }
  }
}

export default SaveRoleUseCase;
