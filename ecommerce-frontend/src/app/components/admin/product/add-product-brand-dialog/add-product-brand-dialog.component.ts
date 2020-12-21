import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductBrandService} from '../../../../service/product-brand.service';
import {ProductBrand} from '../../../../models/ProductBrand';
import {ERR_MESSAGE, SUCCESS_MESSAGE, TITLE_FORM_CONTROL} from '../../../../constant/const';
import {MatSnackBar} from '@angular/material';
import {OpenSnackbar} from '../../../../util/snackbar';

@Component({
  selector: 'app-add-product-brand-dialog',
  templateUrl: './add-product-brand-dialog.component.html',
  styleUrls: ['./add-product-brand-dialog.component.scss']
})
export class AddProductBrandDialogComponent implements OnInit {

  productBrandForm = new FormGroup({
    title: new FormControl('', Validators.required)
  });

  constructor(private productBrandService: ProductBrandService, private snackbar: MatSnackBar) {
  }

  ngOnInit() {
  }

  save() {
    this.productBrandService.save(new ProductBrand(this.productBrandForm.get(TITLE_FORM_CONTROL).value)).subscribe((resp) => {
      OpenSnackbar.openSnackBar(this.snackbar, SUCCESS_MESSAGE);
    }, error => {
      OpenSnackbar.openSnackBar(this.snackbar, ERR_MESSAGE);
    });
  }
}
