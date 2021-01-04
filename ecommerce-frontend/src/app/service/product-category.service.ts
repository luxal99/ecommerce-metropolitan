import {Injectable} from '@angular/core';
import {GenericService} from './generic.service';
import {ProductCategory} from '../models/ProductCategory';
import {PRODUCT_CATEGORY_ROUTE} from '../constant/const';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService extends GenericService<ProductCategory> {
  route = PRODUCT_CATEGORY_ROUTE;
}

