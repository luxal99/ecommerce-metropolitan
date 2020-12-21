import {Product} from './Product';

export class ProductImage {
  id: number;
  title: string;
  url: string;
  idProduct: Product;

  constructor(title: string, url: string) {
    this.title = title;
    this.url = url;
  }
}
