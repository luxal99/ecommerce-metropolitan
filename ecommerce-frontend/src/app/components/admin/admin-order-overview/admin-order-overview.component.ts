import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../../service/order.service';
import {Order} from '../../../models/Order';

@Component({
  selector: 'app-admin-order-overview',
  templateUrl: './admin-order-overview.component.html',
  styleUrls: ['./admin-order-overview.component.scss']
})
export class AdminOrderOverviewComponent implements OnInit {

  listOfOrders: Array<Order> = [];

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.orderService.getAll().subscribe((orders) => {
      this.listOfOrders = orders;
    });
  }

}
