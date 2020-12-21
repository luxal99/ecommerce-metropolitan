import {Component, OnInit} from '@angular/core';
import {DialogUtil} from '../../../util/dialog-util';
import {AddProductDialogComponent} from './add-product-dialog/add-product-dialog.component';
import {DialogOptions} from '../../../util/dialog-options';
import {MatDialog, MatSnackBar} from '@angular/material';
import {AddProductCategoryDialogComponent} from './add-product-category-dialog/add-product-category-dialog.component';
import {AddProductBrandDialogComponent} from './add-product-brand-dialog/add-product-brand-dialog.component';
import {ProductService} from '../../../service/product.service';
import {Product} from '../../../models/Product';
import {OpenSnackbar} from '../../../util/snackbar';
import {ERR_MESSAGE} from '../../../constant/const';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  listOfProducts: Array<Product> = [];

  constructor(private dialog: MatDialog, private productService: ProductService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.productService.getAll().subscribe((products) => {
      this.listOfProducts = products;
    }, () => {
      OpenSnackbar.openSnackBar(this.snackBar, ERR_MESSAGE);
    });
  }

  openAddProductDialog() {
    DialogUtil.openDialog(AddProductDialogComponent, DialogOptions.getOptions({}), this.dialog);
  }

  openAddProductCategoryDialog() {
    DialogUtil.openDialog(AddProductCategoryDialogComponent, DialogOptions.getOptions({}), this.dialog);
  }

  openAddProductBrandDialog() {
    DialogUtil.openDialog(AddProductBrandDialogComponent, DialogOptions.getOptions({}), this.dialog);
  }


}
