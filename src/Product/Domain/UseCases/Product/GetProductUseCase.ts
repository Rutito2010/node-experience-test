import { getRequestContext } from '../../../../Shared/Presentation/Shared/RequestContext';
import IdPayload from '../../../../Shared/Presentation/Requests/IdPayload';
import { REPOSITORIES } from '../../../../Config/Injects';
import IProductRepository from '../../../Infrastructure/Repositories/IProductRepository';
import IProductDomain from '../../Entities/IProductDomain';

class GetProductUseCase {
  private repository: IProductRepository;

  constructor() {
    const { container } = getRequestContext();
    this.repository = container.resolve<IProductRepository>(
      REPOSITORIES.IProductRepository
    );
  }

  async handle(payload: IdPayload): Promise<IProductDomain> {
    return this.repository.getOne(payload.id);
  }
}

export default GetProductUseCase;
