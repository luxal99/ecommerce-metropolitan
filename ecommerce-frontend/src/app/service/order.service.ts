import {Injectable} from '@angular/core';
import {GenericService} from './generic.service';
import {Order} from '../models/Order';
import {ORDER_ROUTE, TOKEN_NAME} from '../constant/const';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends GenericService<Order> {

  route = ORDER_ROUTE;

  create(order: Order) {
    return this.http.post(ORDER_ROUTE + '/create', order, {
      responseType: 'text',
      headers: {Authorization: localStorage.getItem(TOKEN_NAME)}
    });
  }

  findOrderByUsername(): Observable<Array<Order>> {
    return this.http.get<Order[]>(ORDER_ROUTE + '/byUser', {
      responseType: 'json',
      headers: {Authorization: localStorage.getItem(TOKEN_NAME)}
    });
  }

}
