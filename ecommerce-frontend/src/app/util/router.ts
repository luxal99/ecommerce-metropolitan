import {Router} from '@angular/router';
import {LOGIN_ROUTE} from '../constant/const';

export class RouterHandler {
  static backToLogin(router: Router) {
    router.navigate([LOGIN_ROUTE]);
  }
}
