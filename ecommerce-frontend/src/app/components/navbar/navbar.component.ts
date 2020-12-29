import {Component, Input, OnInit, Output} from '@angular/core';
import {Route, Router} from '@angular/router';
import {
  ADMIN_ROLE_NAME, ADMIN_ROUTE,
  CLIENT_ROLE_NAME,
  CLIENT_ROUTE,
  FILTER_ROUTE,
  ROLE_LOCAL_STORAGE,
  SEARCH_FORM_CONTROL,
  TOKEN_NAME
} from '../../constant/const';
import {FormControl, FormGroup} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {DialogUtil} from '../../util/dialog-util';
import {CartDialogComponent} from './cart-dialog/cart-dialog.component';
import {DialogOptions} from '../../util/dialog-options';
import {Options} from '../../models/Options';
import {CartService} from '../../service/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() total = 0;
  @Input() cartSize = 0;
  searchForm = new FormGroup({
    search: new FormControl('')
  });

  constructor(private router: Router, private dialog: MatDialog,
              private cartService: CartService) {
  }

  ngOnInit() {
    this.addListener();
    this.getTotal();
  }

  getTotal() {
    this.total = this.cartService.getTotal();
  }

  openCartDialog() {
    DialogUtil.openDialog(CartDialogComponent, new Options('40%', {right: '0'}, '100vh'), this.dialog);
  }

  addListener() {
    document.getElementById('search').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        this.router.navigate([FILTER_ROUTE], {queryParams: {title: this.searchForm.get(SEARCH_FORM_CONTROL).value}});
      }
    });
  }

  navigateToProfile() {
    const roleName = localStorage.getItem(ROLE_LOCAL_STORAGE);

    if (roleName === CLIENT_ROLE_NAME) {
      this.router.navigate([CLIENT_ROUTE]);
    } else if (roleName === ADMIN_ROLE_NAME) {
      this.router.navigate([ADMIN_ROUTE]);
    }
  }
}
