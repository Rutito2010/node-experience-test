import { getRequestContext } from '../../../../Shared/Presentation/Shared/RequestContext';
import IdPayload from '../../../../Shared/Presentation/Requests/IdPayload';
import IProductDomain from '../../Entities/IProductDomain';
import { REPOSITORIES } from '../../../../Config/Injects';
import IProductRepository from '../../../Infrastructure/Repositories/IProductRepository';

class DeleteProductUseCase {
  private repository: IProductRepository;

  constructor() {
    const { container } = getRequestContext();
    this.repository = container.resolve<IProductRepository>(
      REPOSITORIES.IProductRepository
    );
  }

  async handle(payload: IdPayload): Promise<IProductDomain> {
    const { id } = payload;
    return await this.repository.delete(id);
  }
}

export default DeleteProductUseCase;
