import {Component, OnInit} from '@angular/core';
import {ProductCategory} from '../../models/ProductCategory';
import {ProductCategoryService} from '../../service/product-category.service';
import {Product} from '../../models/Product';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';
import {FILTER_ROUTE, PRODUCT_ROUTE} from '../../constant/const';
import {CartService} from '../../service/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listOfProductCategories: Array<ProductCategory> = [];
  listOfLatestProducts: Array<Product> = [];

  constructor(private productCategoryService: ProductCategoryService,
              private productService: ProductService, private router: Router, private cartService: CartService) {
  }

  ngOnInit() {
    this.getAllCategories();
    this.getLatestFourProducts();
  }

  getAllCategories() {
    this.productCategoryService.getAll().subscribe((categories) => {
      this.listOfProductCategories = categories;
    }, error => {
      console.log(error);
    });
  }

  getLatestFourProducts() {
    this.productService.getAll().subscribe((products) => {
      this.listOfLatestProducts = products.slice(0, 4);

      this.listOfLatestProducts.forEach(e => {
        e.bColor = 'hsl(' + Math.random() * 360 + ', 100%, 75%)';
      });
    });
  }

  searchByCategory(idProductCategory: string) {
    this.router.navigate([FILTER_ROUTE], {queryParams: {idProductCategory}});
  }


}
