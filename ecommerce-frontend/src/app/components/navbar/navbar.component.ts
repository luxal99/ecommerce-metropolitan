import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FILTER_ROUTE, SEARCH_FORM_CONTROL} from '../../constant/const';
import {FormControl, FormGroup} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {DialogUtil} from '../../util/dialog-util';
import {CartDialogComponent} from './cart-dialog/cart-dialog.component';
import {DialogOptions} from '../../util/dialog-options';
import {Options} from '../../models/Options';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  searchForm = new FormGroup({
    search: new FormControl('')
  });

  constructor(private router: Router, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.addListener();
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

}
