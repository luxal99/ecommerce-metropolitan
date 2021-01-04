import {Inject, Injectable} from '@angular/core';
import {GenericService} from './generic.service';
import {HttpClient} from '@angular/common/http';
import {Role} from '../models/Role';
import {ROLE_ROUTE} from '../constant/const';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService extends GenericService<Role> {

  route = ROLE_ROUTE;

  findRoleByName(roleName: string): Observable<Role> {
    return this.http.get<Role>(`${ROLE_ROUTE}/byName?title=${roleName}`, {responseType: 'json'});
  }
}
