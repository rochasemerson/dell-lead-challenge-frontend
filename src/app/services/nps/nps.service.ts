import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NpsService {
  private baseUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getScore(userId: string, productId: string): Observable<Object> {
    const req = this.http.get(`${this.baseUrl}/nps/${userId}&${productId}`)
    return req
  }
}
