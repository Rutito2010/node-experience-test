import ProductUpdatePayload from '../../Payloads/ProductUpdatePayload';
import IProductDomain from '../../Entities/IProductDomain';
import ICategoryRepository from '../../../Infrastructure/Repositories/ICategoryRepository';
import { REPOSITORIES } from '../../../../Config/Injects';
import IProductRepository from '../../../Infrastructure/Repositories/IProductRepository';
import { getRequestContext } from '../../../../Shared/Presentation/Shared/RequestContext';
import ICategoryDomain from 'Product/Domain/Entities/ICategoryDomain';

class UpdateProductUseCase {
  private repository: IProductRepository;
  private categoryRepository: ICategoryRepository;

  constructor() {
    const { container } = getRequestContext();
    this.repository = container.resolve<IProductRepository>(
      REPOSITORIES.IProductRepository
    );
    this.categoryRepository = container.resolve<ICategoryRepository>(
      REPOSITORIES.ICategoryRepository
    );
  }

  async handle(payload: ProductUpdatePayload): Promise<IProductDomain> {
    const { id } = payload;
    const product: IProductDomain = await this.repository.getOneBy(
      { _id: id },
      { populate: 'category' }
    );
    if (product.category.name === payload.newCategory) {
      product.updateRep(payload);
      await this.repository.update(product);
      return product;
    } else {
      const newCategory: ICategoryDomain =
        await this.categoryRepository.getByName(payload.newCategory);

      product.setCategory(newCategory);
      product.updateRep(payload);
      await this.repository.update(product);
      return product;
    }
  }
}

export default UpdateProductUseCase;
