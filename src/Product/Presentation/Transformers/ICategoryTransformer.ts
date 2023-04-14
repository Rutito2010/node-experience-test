import BaseTransformer, {
  BasePropertiesTransformer,
} from '../../../Shared/Presentation/Transformers/BaseTransformer';
import ICategoryDomain from '../../Domain/Entities/ICategoryDomain';

type ICategoryTransformer = BaseTransformer<ICategoryDomain> &
  BasePropertiesTransformer;

export default ICategoryTransformer;
