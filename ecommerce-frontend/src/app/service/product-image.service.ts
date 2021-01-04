import {Injectable} from '@angular/core';
import {GenericService} from './generic.service';
import {ProductImage} from '../models/ProductImage';
import {PRODUCT_IMAGE_ROUTE} from '../constant/const';

@Injectable({
  providedIn: 'root'
})
export class ProductImageService extends GenericService<ProductImage> {
  route = PRODUCT_IMAGE_ROUTE;
}
