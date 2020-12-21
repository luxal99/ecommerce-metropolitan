import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductCategoryService} from '../../../../service/product-category.service';
import {ProductBrandService} from '../../../../service/product-brand.service';
import {ProductBrand} from '../../../../models/ProductBrand';
import {ProductCategory} from '../../../../models/ProductCategory';
import {MatSnackBar} from '@angular/material';
import {OpenSnackbar} from '../../../../util/snackbar';
import {
  AMOUNT_FORM_CONTROL,
  ERR_MESSAGE,
  PRICE_FORM_CONTROL,
  PRODUCT_BRAND_FORM_CONTROL, PRODUCT_CATEGORY_FORM_CONTROL, SUCCESS_MESSAGE,
  TITLE_FORM_CONTROL
} from '../../../../constant/const';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {CKEditorComponent} from '@ckeditor/ckeditor5-angular';
import {ProductService} from '../../../../service/product.service';
import {Product} from '../../../../models/Product';

@Component({
  selector: 'app-add-product-dialog',
  templateUrl: './add-product-dialog.component.html',
  styleUrls: ['./add-product-dialog.component.scss']
})
export class AddProductDialogComponent implements OnInit {

  @ViewChild('editor', {static: false}) editorComponent: CKEditorComponent;
  public Editor = ClassicEditor;

  listOfProductBrands: Array<ProductBrand> = [];
  listOfProductCategories: Array<ProductCategory> = [];
  basicProductForm = new FormGroup({
    title: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required)
  });

  productCategoryForm = new FormGroup({
    idProductBrand: new FormControl('', Validators.required),
    idProductCategory: new FormControl('', Validators.required)
  });

  constructor(private productCategoryService: ProductCategoryService,
              private productBrandService: ProductBrandService,
              private productService: ProductService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.productBrandService.getAll().subscribe((resp) => {
      this.listOfProductBrands = resp;
    }, () => {
      OpenSnackbar.openSnackBar(this.snackBar, ERR_MESSAGE);
    });

    this.productCategoryService.getAll().subscribe((resp) => {
      this.listOfProductCategories = resp;
    }, () => {
      OpenSnackbar.openSnackBar(this.snackBar, ERR_MESSAGE);
    });
  }

  save() {

    const product = new Product();
    product.title = this.basicProductForm.get(TITLE_FORM_CONTROL).value;
    product.amount = this.basicProductForm.get(AMOUNT_FORM_CONTROL).value;
    product.price = this.basicProductForm.get(PRICE_FORM_CONTROL).value;
    product.idProductBrand = this.productCategoryForm.get(PRODUCT_BRAND_FORM_CONTROL).value;
    product.idProductCategory = this.productCategoryForm.get(PRODUCT_CATEGORY_FORM_CONTROL).value;
    product.description = this.editorComponent.editorInstance.getData();

    console.log(product);
    this.productService.save(product).subscribe(() => {
      OpenSnackbar.openSnackBar(this.snackBar, SUCCESS_MESSAGE);
    }, (err) => {
      console.log(err);
      OpenSnackbar.openSnackBar(this.snackBar, ERR_MESSAGE);
    });
  }

}
