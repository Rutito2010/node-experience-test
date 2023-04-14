import IBaseRepository from '../../../Shared/Infrastructure/Repositories/IBaseRepository';
import ICategoryDomain from '../../Domain/Entities/ICategoryDomain';

interface ICategoryRepository extends IBaseRepository<ICategoryDomain> {
  getById(id: number): Promise<ICategoryDomain>;
  getByName(name: string): Promise<ICategoryDomain>;
  list(): Promise<ICategoryDomain[]>;
}

export default ICategoryRepository;
