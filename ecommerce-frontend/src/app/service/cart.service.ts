import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  protected cart: Observable<Array<Product>>;
  protected productArray: Array<Product> = [];

  constructor() {
  }


  addToCart(product: Product): void {
    if (this.productArray.find((element) => element.id === product.id)) {
      this.productArray.find((element) => element.id === product.id).initialCartSize++;
    } else {
      this.productArray.push(product);
    }
    this.cart = new Observable((subscriber) => {
      subscriber.next(this.productArray);
      subscriber.complete();
    });
  }

  deleteFromCart(product: Product) {
    this.productArray = this.productArray.filter((el) => el.id !== product.id);
    this.cart = new Observable((subscriber) => {
      subscriber.next(this.productArray);
      subscriber.complete();
    });
  }


  getCartSize() {
    let total = 0;
    this.productArray.filter((product) => {
      total += product.initialCartSize;
    });
    return total;
  }

  getTotal() {
    let total = 0;
    this.productArray.filter((product) => {
      total += product.price * product.initialCartSize;
    });
    return total;
  }

  getCart() {
    return this.cart;
  }
}
