import {Pipe, PipeTransform} from '@angular/core';
import {Product} from '../models/Product';

@Pipe({
  name: 'product'
})
export class ProductPipe implements PipeTransform {

  transform(listOfProduct: Array<Product>, searchText: string): Array<Product> {

    if (!listOfProduct) {
      return [];
    }
    if (!searchText) {
      return listOfProduct;
    }

    return listOfProduct.filter(product => product.title.toLowerCase().includes(searchText.toLowerCase()));
  }

}
