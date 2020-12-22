import {Component, OnInit} from '@angular/core';
import {ProductCategory} from '../../models/ProductCategory';
import {ProductCategoryService} from '../../service/product-category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listOfProductCategories: Array<ProductCategory> = [];

  constructor(private productCategoryService: ProductCategoryService) {
  }

  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories() {
    this.productCategoryService.getAll().subscribe((categories) => {
      this.listOfProductCategories = categories;
    },error => {
      console.log(error);
    });
  }
}
