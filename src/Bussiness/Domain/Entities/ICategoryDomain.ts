import IBaseDomain from '../../../Shared/Domain/Entities/IBaseDomain';
import CategoryRepPayload from '../Payloads/Category/CategoryRepPayloads';
interface ICategoryDomain extends IBaseDomain {
  updateRep(payload: CategoryRepPayload): void;
}

export default ICategoryDomain;
