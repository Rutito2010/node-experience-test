import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import Transformer from '../../../Shared/Presentation/Shared/Transformer';

import ICategoryDomain from '../../Domain/Entities/ICategoryDomain';
import ICategoryTransformer from './ICategoryTransformer';

class CategoryTransformer extends Transformer {
  public async transform(
    category: ICategoryDomain
  ): Promise<ICategoryTransformer> {
    dayjs.extend(utc);

    return {
      id: category.getId(),
      name: category.name,
      createdAt: dayjs(category.createdAt).utc().unix(),
      updatedAt: dayjs(category.updatedAt).utc().unix(),
    };
  }
}

export default CategoryTransformer;
