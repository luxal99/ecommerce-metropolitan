import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../../service/order.service';
import {Order} from '../../../models/Order';
import {LOGIN_ROUTE, TOKEN_NAME, TOKEN_PREFIX} from '../../../constant/const';
import {DialogUtil} from '../../../util/dialog-util';
import {AdminOrderDialogOverviewComponent} from './admin-order-dialog-overview/admin-order-dialog-overview.component';
import {DialogOptions} from '../../../util/dialog-options';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-order-overview',
  templateUrl: './admin-order-overview.component.html',
  styleUrls: ['./admin-order-overview.component.scss']
})
export class AdminOrderOverviewComponent implements OnInit {

  listOfOrders: Array<Order> = [];

  constructor(private orderService: OrderService, private dialog: MatDialog, private router: Router) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.orderService.getAll({Authorization: TOKEN_PREFIX + localStorage.getItem(TOKEN_NAME)}).subscribe((orders) => {
      this.listOfOrders = orders;
    }, () => {
      this.router.navigate([LOGIN_ROUTE]);
    });
  }

  openOrder(order: Order) {
    DialogUtil.openDialog(AdminOrderDialogOverviewComponent, DialogOptions.getOptions(order), this.dialog);
  }

}
