import ICategoryDomain from './ICategoryDomain';
import Base from '../../../Shared/Domain/Entities/Base';
import CategoryRepPayload from '../Payloads/Category/CategoryRepPayloads';

class Category extends Base implements ICategoryDomain {
  name: string;

  constructor(payload: CategoryRepPayload) {
    super();
    this.updateRep(payload);
  }

  updateRep(payload: CategoryRepPayload): void {
    this.name = payload?.name;
  }
}

export default Category;
