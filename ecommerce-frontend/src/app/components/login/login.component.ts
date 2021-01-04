import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../service/auth.service';
import {User} from '../../models/User';
import {
  ADMIN_ROLE_NAME,
  ADMIN_ROUTE,
  CLIENT_ROLE_NAME, CLIENT_ROUTE,
  PASSWORD_FORM_CONTROL, ROLE_LOCAL_STORAGE,
  TOKEN_NAME,
  USERNAME_FORM_CONTROL
} from '../../constant/const';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  auth() {
    this.authService.authenticate(new User(this.userForm.get(USERNAME_FORM_CONTROL).value, this.userForm.get(PASSWORD_FORM_CONTROL).value))
      .subscribe((resp) => {
        if (resp.accessToken) {
          localStorage.setItem(TOKEN_NAME, resp.accessToken);
          localStorage.setItem(ROLE_LOCAL_STORAGE, resp.roleName);
          if (resp.roleName === ADMIN_ROLE_NAME) {
            this.router.navigate([ADMIN_ROUTE]);
          } else if (resp.roleName === CLIENT_ROLE_NAME) {
            this.router.navigate([CLIENT_ROUTE]);
          }
        }

      }, err => {

      });
  }
}
