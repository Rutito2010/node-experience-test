import ProductRepPayload from './ProductRepPayload';

interface ProductSavePayload extends ProductRepPayload {
  newCategory: string;
}

export default ProductSavePayload;
