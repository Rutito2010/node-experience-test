import Sort from '../../../Shared/Presentation/Requests/Sort';

class ProductSort extends Sort {
  static readonly CREATED_AT: string = 'createdAt';
  static readonly PRICE: string = 'price';

  getFields(): string[] {
    return [ProductSort.CREATED_AT, ProductSort.PRICE];
  }

  getDefaultSorts(): Record<string, 'asc' | 'desc'>[] {
    return [{ [ProductSort.CREATED_AT]: 'desc' }];
  }
}

export default ProductSort;
