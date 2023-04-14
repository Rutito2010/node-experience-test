import IBaseDomain from 'Shared/Domain/Entities/IBaseDomain';
import ProductRepPayload from '../Payloads/ProductRepPayload';
import ICategoryDomain from './ICategoryDomain';

interface IProductDomain extends IBaseDomain, ProductRepPayload {
  updateRep(payload: ProductRepPayload): void;
  getCategory(): ICategoryDomain;
  setCategory(category: ICategoryDomain): void;
}

export default IProductDomain;
