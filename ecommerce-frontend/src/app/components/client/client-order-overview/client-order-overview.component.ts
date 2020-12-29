import {Component, OnInit} from '@angular/core';
import {Order} from '../../../models/Order';
import {OrderService} from '../../../service/order.service';

@Component({
  selector: 'app-client-order-overview',
  templateUrl: './client-order-overview.component.html',
  styleUrls: ['./client-order-overview.component.scss']
})
export class ClientOrderOverviewComponent implements OnInit {

  listOfOrders: Array<Order> = [];

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.orderService.findOrderByUsername().subscribe((listOfOrders) => {
      this.listOfOrders = listOfOrders;
    });
  }
}
