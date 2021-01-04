import {Component, OnInit} from '@angular/core';
import {CartService} from '../../../service/cart.service';
import {Product} from '../../../models/Product';
import {Order} from '../../../models/Order';
import {OrderService} from '../../../service/order.service';
import {MatSnackBar} from '@angular/material';
import {OpenSnackbar} from '../../../util/snackbar';
import {ERR_MESSAGE, SUCCESS_MESSAGE} from '../../../constant/const';

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.scss']
})
export class CartDialogComponent implements OnInit {

  listOfProducts: Array<Product> = [];

  constructor(private cartService: CartService, private orderService: OrderService, private snackBar: MatSnackBar) {
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

  send() {
    const order = new Order(new Date(), 0, []);
    let index = 0;
    for (const product of this.listOfProducts) {
      while (index < product.initialCartSize) {
        order.listOfProducts.push(product);
        index++;
      }
    }
    order.listOfProducts.filter((element) => {
      order.total += element.price;
    });

    this.orderService.create(order).subscribe(() => {
      OpenSnackbar.openSnackBar(this.snackBar, SUCCESS_MESSAGE);
      this.cartService.clearCart();
      this.listOfProducts = [];
    }, () => {
      OpenSnackbar.openSnackBar(this.snackBar, ERR_MESSAGE);
    });

  }
}
