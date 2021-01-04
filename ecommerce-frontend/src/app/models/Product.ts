import {ProductCategory} from './ProductCategory';
import {ProductBrand} from './ProductBrand';
import {ProductImage} from './ProductImage';

export class Product {
  id: number;
  title: string;
  amount: number;
  price: number;
  description: string;
  idProductCategory: ProductCategory;
  idProductBrand: ProductBrand;

  initialCartSize: number;
  listOfImages: ProductImage[];
  bColor: string;
}
