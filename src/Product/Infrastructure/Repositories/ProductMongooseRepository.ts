import { Query } from 'mongoose';
import IProductRepository from './IProductRepository';

import BaseMongooseRepository from '../../../Shared/Infrastructure/Repositories/BaseMongooseRepository';
import { ProductMongooseDocument } from '../Schemas/ProductMongoose';
import MongoosePaginator from '../../../Shared/Infrastructure/Orm/MongoosePaginator';
import ProductFilter from '../../Presentation/Criterias/ProductFilter';
import IProductDomain from '../../Domain/Entities/IProductDomain';

import ICriteria from '../../../Shared/Presentation/Requests/ICriteria';
import NotFoundException from '../../../Shared/Exceptions/NotFoundException';

import Product from '../../Domain/Entities/Product';
import IPaginator from '../../../Shared/Infrastructure/Orm/IPaginator';

class ProductMongooseRepository
  extends BaseMongooseRepository<IProductDomain, ProductMongooseDocument>
  implements IProductRepository
{
  constructor() {
    super(Product.name, ['category']);
  }

  async getByCategory(category: string): Promise<IProductDomain[]> {
    const products = await this.repository
      .find({ category })
      .populate('category');

    if (products.length > 0) {
      return products;
    } else {
      throw new NotFoundException('Product');
    }
  }

  async list(criteria: ICriteria): Promise<IPaginator> {
    const queryBuilder: Query<
      ProductMongooseDocument[],
      ProductMongooseDocument
    > = this.repository.find({});
    const filter = criteria.getFilter();

    void queryBuilder.populate('category');
    if (filter.has(ProductFilter.CATEGORY)) {
      const category = filter.get(ProductFilter.CATEGORY) as string;
      void queryBuilder.where({ category: category });
    }

    return new MongoosePaginator(queryBuilder, criteria);
  }
}
export default ProductMongooseRepository;
