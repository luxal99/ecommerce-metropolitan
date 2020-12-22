import {Component, Input, OnInit} from '@angular/core';
import {PRODUCT_ROUTE} from '../../../constant/const';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-binding',
  templateUrl: './product-binding.component.html',
  styleUrls: ['./product-binding.component.scss']
})
export class ProductBindingComponent implements OnInit {
  @Input() listOfProducts: Array<any>;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  openProduct(id: any) {
    this.router.navigate([PRODUCT_ROUTE], {queryParams: {id}});
  }
}
