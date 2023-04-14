import IdPayload from '../../../Shared/Presentation/Requests/IdPayload';
import ProductRepPayload from './ProductRepPayload';

interface ProductUpdatePayload extends IdPayload, ProductRepPayload {
  productId: string;
  newCategory: string;
}

export default ProductUpdatePayload;
