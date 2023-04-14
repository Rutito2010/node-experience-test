import ICategoryTransformer from './ICategoryTransformer';
import BaseTransformer, {
  BasePropertiesTransformer,
} from '../../../Shared/Presentation/Transformers/BaseTransformer';
import IProductDomain from '../../Domain/Entities/IProductDomain';

type IProductTransformer = BaseTransformer<IProductDomain> &
  BasePropertiesTransformer & {
    category: ICategoryTransformer;
  };

export default IProductTransformer;
