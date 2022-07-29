import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Signin } from '../../components/signin/signin';
import { Signup } from "../../components/signup/signup";
import { editUserType } from '../../pages/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  signUp(body: Signup): Observable<Object> {
    const req = this.http.post(`${this.baseUrl}/auth/signup`, body)
    return req
  }

  signIn(body: Signin): Observable<Object> {
    const req = this.http.post(`${this.baseUrl}/auth/signin`, body)

    return req
  }

  getUser(token: any): Observable<Object> {
    const req = this.http.get(
      `${this.baseUrl}/users/user`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    return req
  }

  editUser(token: any, body: editUserType): Observable<Object> {
    const req = this.http.patch(
      `${this.baseUrl}/users/patch`,
      body,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    return req
  }

  deleteUser(token: any): Observable<Object> {
    const req = this.http.delete(
      `${this.baseUrl}/users/delete`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    return req
  }
}
