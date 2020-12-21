import {Injectable} from '@angular/core';
import {GenericService} from './generic.service';
import {Product} from '../models/Product';
import {HttpClient} from '@angular/common/http';
import {PRODUCT_ROUTE} from '../constant/const';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends GenericService<Product> {
  route = PRODUCT_ROUTE;
}
