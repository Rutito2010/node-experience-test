import IBaseDomain from 'Shared/Domain/Entities/IBaseDomain';
import ProductRepPayload from '../Payloads/Product/ProductRepPayload';
interface IProductDomain extends IBaseDomain {
  updateRep(payload: ProductRepPayload): void;
}

export default IProductDomain;
