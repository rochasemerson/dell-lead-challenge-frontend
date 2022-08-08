import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NpsService {
  private baseUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  newScore(productId: string, user_token: any, score: number): Observable<Object> {
    const req = this.http.post(`${this.baseUrl}/nps/new`,
      {
        productId,
        score
      },
      {
        headers: {
          Authorization: `Bearer ${user_token.acess_token}`
        }
      }
    )
    return req
  }

  getScore(productId: string, user_token: any): Observable<Object> {
    const req = this.http.get(`${this.baseUrl}/nps/${productId}`,
      {
        headers: {
          Authorization: `Bearer ${user_token.acess_token}`
        }
      }
    )
    return req
  }
}
