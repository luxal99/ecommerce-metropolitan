export interface ProductFilter {
  id?: number;
  title?: string;
  priceFrom?: string;
  price?: number;
  idProductCategory?: string;
  idProductBrand?: string;
  listOfImages: Array<any>;
  bColor?;
}
