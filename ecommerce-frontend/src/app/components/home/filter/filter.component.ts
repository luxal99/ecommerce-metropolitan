import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../../service/product.service';
import {ProductFilter} from '../../../inteface/ProductFilter';
import {ProductCategoryService} from '../../../service/product-category.service';
import {ProductBrandService} from '../../../service/product-brand.service';
import {ProductBrand} from '../../../models/ProductBrand';
import {ProductCategory} from '../../../models/ProductCategory';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  searchForm = new FormGroup({
    idProductCategory: new FormControl(''),
    idProductBrand: new FormControl(''),
    priceFrom: new FormControl(''),
    priceTo: new FormControl('')
  });
  filter: ProductFilter;

  listOfProductBrand: Array<ProductBrand> = [];
  listOfProductCategories: Array<ProductCategory> = [];

  constructor(private router: ActivatedRoute,
              private productService: ProductService,
              private productCategoryService: ProductCategoryService,
              private productBrandService: ProductBrandService) {
  }

  ngOnInit() {
    this.init();
    this.get();
  }

  init() {
    this.productCategoryService.getAll().subscribe((resp) => {
      this.listOfProductCategories = resp;
    });

    this.productBrandService.getAll().subscribe((resp) => {
      this.listOfProductBrand = resp;
    });
  }

  get() {
    this.router.queryParams.subscribe((params) => {
      this.productService.getAll().subscribe((listOfProducts) => {
        const dtoList: Array<ProductFilter> = listOfProducts.map(x => ({
          id: x.id,
          title: x.title,
          idProductBrand: x.idProductBrand.title,
          idProductCategory: x.idProductCategory.title
        }));
        dtoList.forEach(product => {

          if (Object.values(params).every(x => Object.values(product).includes(x))) {
            console.log(product);
          }
        });
      });
    });
  }
}
