import { getRequestContext } from '../../../../Shared/Presentation/Shared/RequestContext';
import IdPayload from '../../../../Shared/Presentation/Requests/IdPayload';
import CategoryIdPayload from '../../Payloads/CategoryIdPayload';
import { REPOSITORIES } from '../../../../Config/Injects';
import IProductRepository from '../../../Infrastructure/Repositories/IProductRepository';
import IProductDomain from '../../Entities/IProductDomain';

class GetByCategoryUseCase {
  private repository: IProductRepository;

  constructor() {
    const { container } = getRequestContext();
    this.repository = container.resolve<IProductRepository>(
      REPOSITORIES.IProductRepository
    );
  }

  async handle(payload: CategoryIdPayload): Promise<IProductDomain[]> {
    const result = await this.repository.getByCategory(payload.id);

    return await this.repository.getByCategory(payload.id);
  }
}

export default GetByCategoryUseCase;
