import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../../service/product.service';
import {Product} from '../../../models/Product';
import {ProductImage} from '../../../models/ProductImage';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss']
})
export class ProductOverviewComponent implements OnInit {

  product: Product;
  firstImage: ProductImage;

  constructor(private route: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit() {
     this.findProduct();
  }

  findProduct() {
    this.route.queryParams.subscribe((params) => {
      this.productService.findById(params.id).subscribe((product) => {

        this.product = product;
        this.firstImage = this.product.listOfImages[0];
      });
    });
  }

  changePicture(image: ProductImage) {
    this.firstImage = image;
  }
}
