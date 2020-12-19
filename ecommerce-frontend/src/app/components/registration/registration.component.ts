import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RoleService} from '../../service/role.service';
import {UserService} from '../../service/user.service';
import {UserInfoService} from '../../service/user-info.service';
import {UserInfo} from '../../models/UserInfo';
import {
  CLIENT_ROLE_NAME,
  EMAIL_FORM_CONTROL, ERR_MESSAGE,
  FULL_NAME_FORM_CONTROL, PASSWORD_FORM_CONTROL, SUCCESS_MESSAGE,
  TELEPHONE_FORM_CONTROL,
  USERNAME_FORM_CONTROL
} from '../../constant/const';
import {User} from '../../models/User';
import {MatSnackBar} from '@angular/material';
import {ShippingAddress} from '../../models/ShippingAddress';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  userInfoForm = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    telephone: new FormControl('', Validators.required)
  });

  userForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    passwordConfirm: new FormControl('', Validators.required)
  });

  constructor(private roleRoute: RoleService, private userService: UserService,
              private userInfoService: UserInfoService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  register() {

    console.log(new UserInfo(
      this.userInfoForm.get(FULL_NAME_FORM_CONTROL).value,
      this.userInfoForm.get(EMAIL_FORM_CONTROL).value,
      this.userInfoForm.get(TELEPHONE_FORM_CONTROL).value, new ShippingAddress()));
    this.userInfoService.save(new UserInfo(
      this.userInfoForm.get(FULL_NAME_FORM_CONTROL).value,
      this.userInfoForm.get(EMAIL_FORM_CONTROL).value,
      this.userInfoForm.get(TELEPHONE_FORM_CONTROL).value, new ShippingAddress()))
      .subscribe((userInfo) => {
        this.roleRoute.findRoleByName(CLIENT_ROLE_NAME).subscribe((role) => {
          this.userService.save(new User
          (this.userForm.get(USERNAME_FORM_CONTROL).value,
            this.userForm.get(PASSWORD_FORM_CONTROL).value,
            role, userInfo)).subscribe((user) => {
            this.openSnackBar(SUCCESS_MESSAGE);
          }, error => {
            this.openSnackBar(error);
          });
        });
      });

  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'DONE', {
      duration: 2000,
    });
  }
}
