import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {Product} from '../../../../models/Product';
import {MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import {CKEditorComponent} from '@ckeditor/ckeditor5-angular';
import {ProductImage} from '../../../../models/ProductImage';
import {ProductBrand} from '../../../../models/ProductBrand';
import {ProductCategory} from '../../../../models/ProductCategory';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductCategoryService} from '../../../../service/product-category.service';
import {ProductBrandService} from '../../../../service/product-brand.service';
import {ProductService} from '../../../../service/product.service';
import {ProductImageService} from '../../../../service/product-image.service';
import {Router} from '@angular/router';
import {AngularFireStorage} from '@angular/fire/storage';
import {RouterHandler} from '../../../../util/router';
import {
  AMOUNT_FORM_CONTROL, ERR_MESSAGE,
  PRICE_FORM_CONTROL,
  PRODUCT_BRAND_FORM_CONTROL,
  PRODUCT_CATEGORY_FORM_CONTROL, SUCCESS_MESSAGE,
  TITLE_FORM_CONTROL
} from '../../../../constant/const';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {OpenSnackbar} from '../../../../util/snackbar';

@Component({
  selector: 'app-edit-product-dialog',
  templateUrl: './edit-product-dialog.component.html',
  styleUrls: ['./edit-product-dialog.component.scss']
})
export class EditProductDialogComponent implements OnInit {


  @ViewChild('editor', {static: false}) editorComponent: CKEditorComponent;
  public Editor = ClassicEditor;

  listOfImages: Array<ProductImage> = [];
  fileUploadList: Array<any> = [];

  listOfProductBrands: Array<ProductBrand> = [];
  listOfProductCategories: Array<ProductCategory> = [];
  basicProductForm = new FormGroup({
    title: new FormControl(this.data.title, Validators.required),
    amount: new FormControl(this.data.amount, Validators.required),
    price: new FormControl(this.data.price, Validators.required)
  });

  productCategoryForm = new FormGroup({
    idProductBrand: new FormControl(this.data.idProductBrand.id, Validators.required),
    idProductCategory: new FormControl(this.data.idProductCategory.id, Validators.required)
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: Product, private productCategoryService: ProductCategoryService,
              private productBrandService: ProductBrandService,
              private productService: ProductService,
              private productImageService: ProductImageService,
              private router: Router,
              private snackBar: MatSnackBar, private afStorage: AngularFireStorage) {
  }

  ngOnInit() {
    this.getAll();
    setTimeout(() => {
      this.setDescription();
    }, 1000);
  }

  async addFiles(event) {
    // tslint:disable-next-line:prefer-for-of
    for (let index = 0; index < event.length; index++) {
      const element = event[index];

      const elementIndex = this.fileUploadList.indexOf(element);
      if (elementIndex === -1) {
        this.fileUploadList.push(element);
      }
    }
    await this.uploadFiles();
  }


  async uploadFiles() {

    document.getElementById('spinner').style.display = 'block';

    for (const file of this.fileUploadList) {
      this.afStorage.upload(file.name, file)
        .then(async () => {
          const downloadUrl = await this.afStorage.ref(file.name).getDownloadURL().subscribe(async data => {
            this.listOfImages.push(new ProductImage(file.name, data));
            const image = new ProductImage(file.name, data);
            image.idProduct = this.data;
            this.productImageService.save(image).subscribe(() => {
            });
            document.getElementById('spinner').style.display = 'none';
          });
        });
    }
    this.fileUploadList = [];

  }


  getAll() {
    this.productBrandService.getAll().subscribe((resp) => {
      this.listOfProductBrands = resp;
    }, () => {
      RouterHandler.backToLogin(this.router);
    });

    this.productCategoryService.getAll().subscribe((resp) => {
      this.listOfProductCategories = resp;
    }, () => {
      RouterHandler.backToLogin(this.router);
    });
  }

  save() {
    const product = new Product();
    product.title = this.basicProductForm.get(TITLE_FORM_CONTROL).value;
    product.amount = this.basicProductForm.get(AMOUNT_FORM_CONTROL).value;
    product.price = this.basicProductForm.get(PRICE_FORM_CONTROL).value;

    const productBrand = new ProductBrand();
    const productCategory = new ProductCategory();

    productBrand.id = this.productCategoryForm.get(PRODUCT_BRAND_FORM_CONTROL).value;
    productCategory.id = this.productCategoryForm.get(PRODUCT_CATEGORY_FORM_CONTROL).value;

    product.idProductBrand = productBrand;
    product.idProductCategory = productCategory;
    product.description = this.editorComponent.editorInstance.getData();

    product.listOfImages = this.data.listOfImages;
    product.initialCartSize = 1;
    product.id = this.data.id;

    this.productService.update(product).subscribe(() => {
      OpenSnackbar.openSnackBar(this.snackBar, SUCCESS_MESSAGE);
    }, (err) => {
      console.log(err);
      OpenSnackbar.openSnackBar(this.snackBar, ERR_MESSAGE);
    });
  }

  deleteImage(image: ProductImage) {
    const index = this.data.listOfImages.indexOf(image);
    this.data.listOfImages.splice(index, 1);
    this.productImageService.delete(image.id).subscribe(() => {

    });
  }

  setDescription() {
    this.editorComponent.editorInstance.setData(this.data.description);
  }


}
