import IBaseRepository from '../../../Shared/Infrastructure/Repositories/IBaseRepository';
import IProductDomain from '../../Domain/Entities/IProductDomain';
import ICriteria from '../../../Shared/Presentation/Requests/ICriteria';
import IPaginator from '../../../Shared/Infrastructure/Orm/IPaginator';

interface IProductRepository extends IBaseRepository<IProductDomain> {
  getByCategory(category: string): Promise<IProductDomain[]>;
  list(criteria: ICriteria): Promise<IPaginator>;
}

export default IProductRepository;
