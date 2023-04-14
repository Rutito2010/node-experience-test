import IProductDomain from '../../Entities/IProductDomain';
import IProductRepository from '../../../Infrastructure/Repositories/IProductRepository';
import ICategoryRepository from '../../../Infrastructure/Repositories/ICategoryRepository';
import ProductSavePayload from '../../Payloads/ProductSavePayload';
import { REPOSITORIES } from '../../../../Config/Injects';
import { getRequestContext } from '../../../../Shared/Presentation/Shared/RequestContext';
import Product from '../../Entities/Product';
import Category from '../../Entities/Category';
import CategoryRepPayload from '../../Payloads/CategoryRepPayload';

class SaveUserUseCase {
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

  async handle(payload: ProductSavePayload): Promise<IProductDomain> {
    const category = await this.categoryRepository.getByName(
      payload.newCategory
    );
    const product = new Product(payload);
    if (category) {
      product.setCategory(category);
      const savedProduct: IProductDomain = await this.repository.save(product);
      return savedProduct;
    } else {
      const generalCategory = await this.categoryRepository.getByName(
        'General'
      );
      product.setCategory(generalCategory);
      const savedProduct: IProductDomain = await this.repository.save(product);
      return savedProduct;
    }
  }
}

export default SaveUserUseCase;
