import {Component, OnInit} from '@angular/core';
import {DialogUtil} from '../../../util/dialog-util';
import {AddProductDialogComponent} from './add-product-dialog/add-product-dialog.component';
import {DialogOptions} from '../../../util/dialog-options';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openAddProductDialog() {
    DialogUtil.openDialog(AddProductDialogComponent, DialogOptions.getOptions({}), this.dialog);
  }


}
