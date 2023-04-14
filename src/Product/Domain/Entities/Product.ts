import ICategoryDomain from '../../Domain/Entities/ICategoryDomain';
import IProductDomain from './IProductDomain';
import Base from '../../../Shared/Domain/Entities/Base';
import ProductRepPayload from '../Payloads/ProductRepPayload';

class Product extends Base implements IProductDomain {
  title: string;
  description: string;
  price: number;
  stock: number;
  category: ICategoryDomain;

  constructor(payload: ProductRepPayload) {
    super();
    this.updateRep(payload);
  }

  updateRep(payload: ProductRepPayload) {
    this.title = payload?.title ?? this.title;
    this.description = payload?.description ?? this.description;
    this.price = payload?.price ?? this.price;
    this.stock = payload?.stock ?? this.stock;
    this.category = payload?.category ?? this.category;
  }

  getCategory() {
    return this.category;
  }

  setCategory(category: ICategoryDomain): void {
    this.category = category;
  }
}

export default Product;
