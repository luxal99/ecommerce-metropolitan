import {Component, OnInit} from '@angular/core';
import {Order} from '../../../models/Order';
import {OrderService} from '../../../service/order.service';
import {Router} from '@angular/router';
import {LOGIN_ROUTE} from '../../../constant/const';
import {DialogUtil} from '../../../util/dialog-util';
import {ClientOrderProductPreviewComponent} from './client-order-product-preview/client-order-product-preview.component';
import {MatDialog} from '@angular/material';
import {DialogOptions} from '../../../util/dialog-options';

@Component({
  selector: 'app-client-order-overview',
  templateUrl: './client-order-overview.component.html',
  styleUrls: ['./client-order-overview.component.scss']
})
export class ClientOrderOverviewComponent implements OnInit {

  listOfOrders: Array<Order> = [];
  total = 0;

  constructor(private orderService: OrderService, private router: Router, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.orderService.findOrderByUsername().subscribe((listOfOrders) => {
      this.listOfOrders = listOfOrders;

      for (const order of listOfOrders) {
        this.total += order.total;
      }
    }, () => {
      this.router.navigate([LOGIN_ROUTE]);
    });
  }

  openOrderDetail(order: Order) {
    DialogUtil.openDialog(ClientOrderProductPreviewComponent, DialogOptions.getOptions(order), this.dialog);
  }
}
