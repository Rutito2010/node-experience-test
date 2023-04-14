import IBaseDomain from '../../../Shared/Domain/Entities/IBaseDomain';
import CategoryRepPayload from '../Payloads/CategoryRepPayload';
interface ICategoryDomain extends IBaseDomain, CategoryRepPayload {
  updateRep(payload: CategoryRepPayload): void;
  getName(): string;
}

export default ICategoryDomain;
