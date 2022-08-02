import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';
import { ProductType } from '../products/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productInfo: ProductType = {
    id: '',
    name: '',
    price: '',
    description: '',
    imgUrl: ''
  }
  productId: any = this.route.snapshot.params
  
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
    ) { }
    
    ngOnInit(): void {
      this.getProduct()
  }

  getProduct() {
    return this.productService.getProduct(this.productId.id).subscribe(
      (resp: any) => {
        this.productInfo = resp
      }
    )
  }
}
