import {Component, Input, OnInit} from '@angular/core';
import {PRODUCT_ROUTE} from '../../../constant/const';
import {Router} from '@angular/router';
import {Product} from '../../../models/Product';
import {CartService} from '../../../service/cart.service';

@Component({
  selector: 'app-product-binding',
  templateUrl: './product-binding.component.html',
  styleUrls: ['./product-binding.component.scss']
})
export class ProductBindingComponent implements OnInit {

  @Input() listOfProducts: Array<any>;

  constructor(private router: Router, private cartService: CartService) {
  }

  ngOnInit() {
  }

  openProduct(id: any) {
    this.router.navigate([PRODUCT_ROUTE], {queryParams: {id}});
  }

}
