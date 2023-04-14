import Filter from '../../../Shared/Presentation/Requests/Filter';

class ProductFilter extends Filter {
  static readonly PRICE: string = 'number';
  static readonly CATEGORY: string = 'category';

  getFields(): any {
    return [ProductFilter.CATEGORY];
  }

  getDefaultFilters(): any {
    return [{}];
  }
}

export default ProductFilter;
