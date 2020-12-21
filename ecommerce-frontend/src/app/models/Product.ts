import {ProductCategory} from './ProductCategory';
import {ProductBrand} from './ProductBrand';

export class Product {
  id: number;
  title: string;
  amount: number;
  price: number;
  description: string;
  idProductCategory: ProductCategory;
  idProductBrand: ProductBrand;

}
