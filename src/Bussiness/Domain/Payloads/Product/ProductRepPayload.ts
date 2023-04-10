import ICategoryDomain from '../../../Domain/Entities/ICategoryDomain';

interface ProductRepPayload {
  title: string;
  description: string;
  price: number;
  stock: number;
  category: ICategoryDomain;
}

export default ProductRepPayload;
