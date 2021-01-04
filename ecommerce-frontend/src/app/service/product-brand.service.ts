import {Injectable} from '@angular/core';
import {GenericService} from './generic.service';
import {ProductBrand} from '../models/ProductBrand';
import {PRODUCT_BRAND_ROUTE} from '../constant/const';

@Injectable({
  providedIn: 'root'
})
export class ProductBrandService extends GenericService<ProductBrand> {
  route = PRODUCT_BRAND_ROUTE;
}
