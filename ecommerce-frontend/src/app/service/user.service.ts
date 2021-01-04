import {Injectable} from '@angular/core';
import {GenericService} from './generic.service';
import {User} from '../models/User';
import {HttpClient} from '@angular/common/http';
import {USER_ROUTE} from '../constant/const';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  route = USER_ROUTE;


  constructor(private http: HttpClient) {
  }

  save(user: User) {
    return this.http.post(this.route, user, {responseType: 'text'});
  }
}
