import {Injectable} from '@angular/core';
import {GenericService} from './generic.service';
import {ShippingAddress} from '../models/ShippingAddress';
import {SHIPPING_ADDRESS_ROUTE, TOKEN_NAME} from '../constant/const';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShippingAddressService extends GenericService<ShippingAddress> {
  route = SHIPPING_ADDRESS_ROUTE;

  findByUsername(): Observable<ShippingAddress> {
    return this.http.get<ShippingAddress>(SHIPPING_ADDRESS_ROUTE + '/byUser', {
      responseType: 'json',
      headers: {Authorization: localStorage.getItem(TOKEN_NAME)}
    });
  }
}
