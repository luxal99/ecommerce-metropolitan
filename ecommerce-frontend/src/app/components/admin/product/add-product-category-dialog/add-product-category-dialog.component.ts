import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductCategoryService} from '../../../../service/product-category.service';
import {ProductCategory} from '../../../../models/ProductCategory';
import {TITLE_FORM_CONTROL} from '../../../../constant/const';

@Component({
  selector: 'app-add-product-category-dialog',
  templateUrl: './add-product-category-dialog.component.html',
  styleUrls: ['./add-product-category-dialog.component.scss']
})
export class AddProductCategoryDialogComponent implements OnInit {

  productCategoryForm = new FormGroup({
    title: new FormControl('', Validators.required)
  });

  constructor(private productCategoryService: ProductCategoryService) {
  }

  ngOnInit() {
  }

  save() {
    this.productCategoryService.save(new ProductCategory(this.productCategoryForm.get(TITLE_FORM_CONTROL).value)).subscribe((resp) => {
      console.log(resp);
    });
  }

}
