import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FILTER_ROUTE, SEARCH_FORM_CONTROL} from '../../constant/const';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  searchForm = new FormGroup({
    search: new FormControl('')
  });

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.addListener();
  }

  addListener() {
    document.getElementById('search').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        this.router.navigate([FILTER_ROUTE], {queryParams: {title: this.searchForm.get(SEARCH_FORM_CONTROL).value}});
      }
    });
  }

}
