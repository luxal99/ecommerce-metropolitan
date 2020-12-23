import {PriceFilter} from './PriceFilter';

export interface ProductFilter {
  id?: number;
  title?: string;
  priceFilter?: PriceFilter;
  price?: number;
  idProductCategory?: string;
  idProductBrand?: string;
  listOfImages?: Array<any>;
  bColor?;
}
