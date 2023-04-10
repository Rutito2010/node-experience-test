import IBaseRepository from '../../../Shared/Infrastructure/Repositories/IBaseRepository';
import IProductDomain from '../../Domain/Entities/IProductDomain';

interface IProductRepository extends IBaseRepository<IProductDomain> {
  getByCategory(category: string): Promise<IProductDomain[]>;
  getAll(): Promise<IProductDomain[]>;
}

export default IProductRepository;
