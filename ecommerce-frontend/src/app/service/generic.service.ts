import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TOKEN_NAME, TOKEN_PREFIX} from '../constant/const';

@Injectable({
  providedIn: 'root'
})
export class GenericService<T> {

  protected route: string;

  constructor(protected http: HttpClient) {
  }

  save(entity: T): Observable<T> {
    return this.http.post<T>(`${this.route}`, entity, {
      responseType: 'json',
      headers: {Authorization: localStorage.getItem(TOKEN_NAME)}
    });
  }

  findById(id) {
    return this.http.get(`${this.route}/` + id, {
      responseType: 'json',
      headers: {Authorization: TOKEN_PREFIX + localStorage.getItem(TOKEN_NAME)}
    });
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${this.route}`, {
      responseType: 'json',
      headers: {Authorization: TOKEN_PREFIX + localStorage.getItem(TOKEN_NAME)}
    });
  }

  update(entity: T) {
    return this.http.put(`${this.route}`, entity, {
      responseType: 'text',
      headers: {Authorization: TOKEN_PREFIX + localStorage.getItem(TOKEN_NAME)}
    });
  }

  delete(id: number) {
    return this.http.delete(`${this.route}/${id}`, {
      responseType: 'text',
      headers: {Authorization: TOKEN_PREFIX + localStorage.getItem(TOKEN_NAME)}
    });
  }
}



