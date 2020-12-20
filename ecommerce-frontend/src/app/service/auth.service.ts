import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/User';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {LoginResponse} from '../inteface/LoginResponse';
import {BASIC_ROUTE, LOGIN_ROUTE, TOKEN_NAME} from '../constant/const';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private http: HttpClient, private router: Router) {
  }

  authenticate(user: User): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('/login', user, {responseType: 'json'});
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem(TOKEN_NAME)) { // logged in so return true
      return true;
    }
    // not logged in so redirect to login page with the return url
    this.router.navigate([LOGIN_ROUTE], {queryParams: {returnUrl: state.url}});
    return false;
  }
}
