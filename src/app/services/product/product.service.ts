import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getProducts(page: number, limit: number): Observable<Object> {
    const req = this.http.get(`${this.baseUrl}/products/?limit=${limit}&page=${page}`)
    return req
  }
}
