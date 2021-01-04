import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {Product} from '../../../../models/Product';
import {Order} from '../../../../models/Order';
import {ORDER_STATUS_ARR, ORDER_STATUS_FORM_CONTROL} from '../../../../constant/const';
import {FormControl, FormGroup} from '@angular/forms';
import {OrderService} from '../../../../service/order.service';

@Component({
  selector: 'app-admin-order-dialog-overview',
  templateUrl: './admin-order-dialog-overview.component.html',
  styleUrls: ['./admin-order-dialog-overview.component.scss']
})
export class AdminOrderDialogOverviewComponent implements OnInit {

  listOfOrdersStatus = ORDER_STATUS_ARR;

  orderStatusForm = new FormGroup({
    orderStatus: new FormControl(this.order.orderStatus)
  });

  constructor(@Inject(MAT_DIALOG_DATA) public order: Order, private orderService: OrderService) {
  }

  ngOnInit() {
  }

  updateStatus() {
    this.order.orderStatus = this.orderStatusForm.get(ORDER_STATUS_FORM_CONTROL).value;
    this.orderService.update(this.order).subscribe(() => {
    });
  }

}
