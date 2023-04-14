import NotFoundException from '../../../Shared/Exceptions/NotFoundException';
import BaseMongooseRepository from '../../../Shared/Infrastructure/Repositories/BaseMongooseRepository';
import { CategoryMongooseDocument } from '../Schemas/CategoryMongoose';
import Category from '../../Domain/Entities/Category';
import ICategoryDomain from '../../Domain/Entities/ICategoryDomain';
import ICategoryRepository from './ICategoryRepository';

class CategoryMongooseRepository
  extends BaseMongooseRepository<ICategoryDomain, CategoryMongooseDocument>
  implements ICategoryRepository
{
  constructor() {
    super(Category.name);
  }

  async list(): Promise<ICategoryDomain[]> {
    return this.repository.find();
  }

  async getById(id: number): Promise<ICategoryDomain> {
    return this.repository.findById(id);
  }

  async getByName(name: string): Promise<ICategoryDomain> {
    return this.repository.findOne({ name });
  }
}

export default CategoryMongooseRepository;
