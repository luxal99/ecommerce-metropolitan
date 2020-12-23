import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../../service/product.service';
import {ProductFilter} from '../../../inteface/ProductFilter';
import {ProductCategoryService} from '../../../service/product-category.service';
import {ProductBrandService} from '../../../service/product-brand.service';
import {ProductBrand} from '../../../models/ProductBrand';
import {ProductCategory} from '../../../models/ProductCategory';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {
  PRICE_FROM_FORM_CONTROL,
  PRICE_TO_FORM_CONTROL,
  PRODUCT_BRAND_FORM_CONTROL,
  PRODUCT_CATEGORY_FORM_CONTROL
} from '../../../constant/const';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  productFilterObservable: Observable<Array<ProductFilter>>;

  searchForm = new FormGroup({
    idProductCategory: new FormControl(''),
    idProductBrand: new FormControl(''),
    priceFrom: new FormControl(0),
    priceTo: new FormControl(0)
  });

  listOfProductBrand: Array<ProductBrand> = [];
  listOfProductCategories: Array<ProductCategory> = [];
  listOfFilteredProduct: Array<ProductFilter> = [];

  constructor(private router: ActivatedRoute,
              private productService: ProductService,
              private productCategoryService: ProductCategoryService,
              private productBrandService: ProductBrandService) {
  }

  ngOnInit() {
    this.init();
    this.get();
  }

  filterProduct() {

    this.listOfFilteredProduct = [];
    this.productFilterObservable.subscribe(productDTO => {
      const filter: ProductFilter = {
        idProductCategory: this.searchForm.get(PRODUCT_CATEGORY_FORM_CONTROL).value,
        idProductBrand: this.searchForm.get(PRODUCT_BRAND_FORM_CONTROL).value
      };
      for (const [k1, v1] of Object.entries(filter)) {
        if (!v1) {
          console.log(k1);
          delete filter[k1];
        }
      }

      delete filter.priceFilter;

      productDTO.forEach(product => {
        if (Object.values(filter).every(x => Object.values(product).includes(x))) {
          this.listOfFilteredProduct.push(product);
        }
      });

      filter.priceFilter = {
        priceFrom: this.searchForm.get(PRICE_FROM_FORM_CONTROL).value,
        priceTo: this.searchForm.get(PRICE_TO_FORM_CONTROL).value
      };

      if (filter.priceFilter.priceTo !== 0 && filter.priceFilter.priceFrom !== 0) {
        this.listOfFilteredProduct = this.listOfFilteredProduct.filter(x => x.price
          >= filter.priceFilter.priceFrom && x.price <= filter.priceFilter.priceTo);
      } else if (filter.priceFilter.priceTo !== 0 && filter.priceFilter.priceFrom === 0) {
        this.listOfFilteredProduct = this.listOfFilteredProduct.filter(x => x.price <= filter.priceFilter.priceTo);
      } else if (filter.priceFilter.priceTo === 0 && filter.priceFilter.priceFrom !== 0) {
        this.listOfFilteredProduct = this.listOfFilteredProduct.filter(x => x.price >= filter.priceFilter.priceFrom);
      } else {

      }

    });
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
      if (!params.title) {
        this.searchForm.get(PRODUCT_CATEGORY_FORM_CONTROL).setValue(params.idProductCategory);
        this.productService.getAll().subscribe((listOfProducts) => {
          const dtoList: Array<ProductFilter> = listOfProducts.map(x => ({
            id: x.id,
            title: x.title,
            idProductBrand: x.idProductBrand.title,
            idProductCategory: x.idProductCategory.title,
            listOfImages: x.listOfImages,
            price: x.price,
            bColor: 'hsl(' + Math.random() * 360 + ', 100%, 75%)'
          }));

          this.productFilterObservable = new Observable(observer => {
            observer.next(dtoList);
          });
          dtoList.forEach(product => {
            if (Object.values(params).every(x => Object.values(product).includes(x))) {
              this.listOfFilteredProduct.push(product);
            }
          });
        });
      } else if (params.title) {
        this.productService.getAll().subscribe((listOfProducts) => {
          listOfProducts = listOfProducts.filter(product => product.title.toLowerCase().includes(params.title));

          const dtoList: Array<ProductFilter> = listOfProducts.map(x => ({
            id: x.id,
            title: x.title,
            idProductBrand: x.idProductBrand.title,
            idProductCategory: x.idProductCategory.title,
            listOfImages: x.listOfImages,
            price: x.price,
            bColor: 'hsl(' + Math.random() * 360 + ', 100%, 75%)'
          }));

          this.listOfFilteredProduct = dtoList;

          this.productFilterObservable = new Observable(observer => {
            observer.next(dtoList);
          });
        });
      }

    });
  }
}
