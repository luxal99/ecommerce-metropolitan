import {Component, OnInit} from '@angular/core';
import {CartService} from '../../../service/cart.service';
import {Product} from '../../../models/Product';

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.scss']
})
export class CartDialogComponent implements OnInit {

  listOfProducts: Array<Product> = [];

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.getCart();
  }

   getCart() {
    this.cartService.getCart().subscribe((x) => {
      this.listOfProducts = x;
    });
  }

  remove(product: Product) {
    this.cartService.deleteFromCart(product);
    this.getCart();
  }
}
