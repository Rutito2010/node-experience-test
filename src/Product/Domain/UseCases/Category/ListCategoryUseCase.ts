import { REPOSITORIES } from '../../../../Config/Injects';
import ICategoryRepository from '../../../Infrastructure/Repositories/ICategoryRepository';
import { getRequestContext } from '../../../../Shared/Presentation/Shared/RequestContext';
import ICategoryDomain from 'Product/Domain/Entities/ICategoryDomain';

class ListCategoryUseCase {
  private repository: ICategoryRepository;

  constructor() {
    const { container } = getRequestContext();
    this.repository = container.resolve<ICategoryRepository>(
      REPOSITORIES.ICategoryRepository
    );
  }

  async handle(): Promise<ICategoryDomain[]> {
    return await this.repository.list();
  }
}

export default ListCategoryUseCase;
