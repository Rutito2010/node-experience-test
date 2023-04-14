import CategoryUpdatePayload from '../../Payloads/CategoryUpdatePayload';
import ICategoryDomain from '../../Entities/ICategoryDomain';
import { REPOSITORIES } from '../../../../Config/Injects';
import ICategoryRepository from '../../../Infrastructure/Repositories/ICategoryRepository';
import { getRequestContext } from '../../../../Shared/Presentation/Shared/RequestContext';

class UpdateRoleUseCase {
  private repository: ICategoryRepository;

  constructor() {
    const { container } = getRequestContext();
    this.repository = container.resolve<ICategoryRepository>(
      REPOSITORIES.IRoleRepository
    );
  }

  async handle(payload: CategoryUpdatePayload): Promise<ICategoryDomain> {
    const category: ICategoryDomain = await this.repository.getOne(payload.id);
    category.updateRep(payload);

    return await this.repository.update(category);
  }
}

export default UpdateRoleUseCase;
