import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import IProductDomain from '../../Domain/Entities/IProductDomain';
import CategoryTransformer from './CategoryTransformer';
import IProductTransformer from './IProductTransformer';
import Transformer from '../../../Shared/Presentation/Shared/Transformer';

class ProductTransformer extends Transformer {
  private CategoryTransformer: CategoryTransformer;

  constructor() {
    super();
    this.CategoryTransformer = new CategoryTransformer();
  }

  public async transform(
    product: IProductDomain
  ): Promise<IProductTransformer> {
    dayjs.extend(utc);

    return {
      id: product.getId(),
      title: product.title,
      description: product.description,
      price: product.price,
      stock: product.stock,
      category: await this.CategoryTransformer.handle(product.getCategory()),
      createdAt: dayjs(product.createdAt).utc().unix(),
      updatedAt: dayjs(product.updatedAt).utc().unix(),
    };
  }
}

export default ProductTransformer;
