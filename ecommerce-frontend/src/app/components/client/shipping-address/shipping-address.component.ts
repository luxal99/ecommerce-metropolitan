import {Component, OnInit} from '@angular/core';
import {ShippingAddressService} from '../../../service/shipping-address.service';
import {ShippingAddress} from '../../../models/ShippingAddress';
import {Router} from '@angular/router';
import {ADDRESS_FORM_CONTROL, CITY_FORM_CONTROL, LOGIN_ROUTE, POSTCODE_FORM_CONTROL} from '../../../constant/const';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.scss']
})
export class ShippingAddressComponent implements OnInit {

  shippingAddressForm = new FormGroup({
    city: new FormControl(),
    address: new FormControl(),
    postcode: new FormControl()
  });

  constructor(private shippingAddressService: ShippingAddressService, private router: Router) {
  }

  ngOnInit() {
    this.findShippingAddress();
  }

  findShippingAddress() {
    this.shippingAddressService.findByUsername().subscribe((resp) => {
      this.setValue(resp);
    }, () => {
      this.router.navigate([LOGIN_ROUTE]);
    });
  }

  setValue(shippingAddress: ShippingAddress) {
    this.shippingAddressForm.get(CITY_FORM_CONTROL).setValue(shippingAddress.city);
    this.shippingAddressForm.get(ADDRESS_FORM_CONTROL).setValue(shippingAddress.address);
    this.shippingAddressForm.get(POSTCODE_FORM_CONTROL).setValue(shippingAddress.postcode);
  }

  update() {
    this.shippingAddressService.update(this.shippingAddressForm.getRawValue()).subscribe((resp) => {
      this.setValue(resp);
    });
  }
}
