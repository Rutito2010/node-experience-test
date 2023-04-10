import { Query } from 'mongoose';
import IProductRepository from './IProductRepository';

import MongoosePaginator from '../../../Shared/Infrastructure/Orm/MongoosePaginator';
// import ProductFilter from '../../Presentation/Criterias/ProductFilter';
import IProductDomain from '../../Domain/Entities/IProductDomain';

import NotFoundException from '../../../Shared/Exceptions/NotFoundException';
import BaseMongooseRepository from '../../../Shared/Infrastructure/Repositories/BaseMongooseRepository';
import Product from '../../Domain/Entities/Product';
import { ProductMongooseDocument } from '../Schemas/ProductMongoose';

class UserMongoose
  extends BaseMongooseRepository<IProductDomain, ProductMongooseDocument>
  implements IProductRepository
{
  constructor() {
    super(Product.name, ['category']);
  }

  async getByCategory(category: string): Promise<IProductDomain[]> {
    const products = await this.repository
      .find({ category })
      .populate(this.populate);

    if (products.length > 0) {
      return products;
    } else {
      throw new NotFoundException('Product');
    }
  }

  async getAll(): Promise<IProductDomain[]> {
    const products = await this.repository.find();

    return products;
  }
}
