import { getRequestContext } from '../../../../Shared/Presentation/Shared/RequestContext';
import ICriteria from '../../../../Shared/Presentation/Requests/ICriteria';
import IPaginator from '../../../../Shared/Infrastructure/Orm/IPaginator';
import { REPOSITORIES } from '../../../../Config/Injects';
import IProductRepository from '../../../Infrastructure/Repositories/IProductRepository';

class ListProductsUseCase {
  private repository: IProductRepository;

  constructor() {
    const { container } = getRequestContext();
    this.repository = container.resolve<IProductRepository>(
      REPOSITORIES.IProductRepository
    );
  }

  async handle(payload: ICriteria): Promise<IPaginator> {
    return await this.repository.list(payload);
  }
}

export default ListProductsUseCase;
