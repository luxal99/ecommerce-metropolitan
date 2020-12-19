import {Injectable} from '@angular/core';
import {GenericService} from './generic.service';
import {UserInfo} from '../models/UserInfo';
import {HttpClient} from '@angular/common/http';
import {USER_INFO_ROUTE} from '../constant/const';
import {User} from '../models/User';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  route = USER_INFO_ROUTE;


  constructor(private http: HttpClient) {
  }

  save(entity: UserInfo): Observable<UserInfo> {
    return this.http.post<UserInfo>(this.route, entity, {responseType: 'json'});
  }
}
