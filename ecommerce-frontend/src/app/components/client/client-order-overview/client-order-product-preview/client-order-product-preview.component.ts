import {Component, Inject, OnInit} from '@angular/core';
import {Order} from '../../../../models/Order';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-client-order-product-preview',
  templateUrl: './client-order-product-preview.component.html',
  styleUrls: ['./client-order-product-preview.component.scss']
})
export class ClientOrderProductPreviewComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public order: Order) {
  }
  ngOnInit() {
  }

}
