import {Product} from './Product';

export class Order {
  id: number;
  date: Date;
  total: number;
  listOfProducts: Array<Product> = [];


  constructor(date?: Date, total?: number, listOfProducts?: Product[]) {
    this.date = date;
    this.total = total;
    this.listOfProducts = listOfProducts;
  }
}
