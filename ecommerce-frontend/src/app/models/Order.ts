import {Product} from './Product';
import {UserInfo} from './UserInfo';

export class Order {
  id: number;
  date: Date;
  total: number;
  listOfProducts: Array<Product> = [];
  idUserInfo: UserInfo;
  orderStatus: string;

  constructor(date?: Date, total?: number, listOfProducts?: Product[]) {
    this.date = date;
    this.total = total;
    this.listOfProducts = listOfProducts;
  }
}
