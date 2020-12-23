import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  protected cart: Observable<Set<Product>>;

  constructor() {
  }

  addToCart(product: Set<Product>): void {
    this.cart = new Observable(observer => {
      observer.next(product);
    });
  }

  getCart() {
    return this.cart;
  }
}
