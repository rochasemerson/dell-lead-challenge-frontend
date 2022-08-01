import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { ProductType } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  constructor(private productService: ProductService) { }
  
  ngOnInit(): void {
    this.getProducts()
  }

  productList: Array<ProductType> = []
  page: number = 1
  limit: number = 3
  filter: string = ''

  getProducts() {
    return this.productService.getProducts(this.page, this.limit).subscribe(
      (resp: any) => {
        this.productList = resp
      }
    )
  }

  loadMore() {
    this.limit += 3
    this.getProducts()    
  }

  productFilter() {
    return this.productService.filterProducts(this.filter).subscribe(
      (resp: any) => {
        this.productList = resp
      }
    )
  }
}
