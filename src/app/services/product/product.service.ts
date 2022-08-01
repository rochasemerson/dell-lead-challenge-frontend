import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductType } from 'src/app/pages/products/product';

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

  filterProducts(filter: string): Observable<Object> {
    const req = this.http.get(`${this.baseUrl}/products/filter/${filter}`)
    return req
  }

  createProduct(body: ProductType): Observable<Object> {
    const req = this.http.post(`${this.baseUrl}/products/new`, body)
    return req
  }

  editProduct(body: ProductType): Observable<Object> {
    const req = this.http.patch(`${this.baseUrl}/products/edit/${body.id}`, body)
    return req
  }

  deleteProduct(body: ProductType): Observable<Object> {
    const req = this.http.delete(`${this.baseUrl}/products/delete/${body.id}`)
    return req
  }
}
