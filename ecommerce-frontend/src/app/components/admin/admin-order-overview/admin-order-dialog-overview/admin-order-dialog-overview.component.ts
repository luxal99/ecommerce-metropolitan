import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {Product} from '../../../../models/Product';
import {Order} from '../../../../models/Order';

@Component({
  selector: 'app-admin-order-dialog-overview',
  templateUrl: './admin-order-dialog-overview.component.html',
  styleUrls: ['./admin-order-dialog-overview.component.scss']
})
export class AdminOrderDialogOverviewComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public order: Order) {
  }

  ngOnInit() {
  }


}
