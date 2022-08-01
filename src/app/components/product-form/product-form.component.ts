import { Component, OnInit } from '@angular/core';
import { ProductType } from 'src/app/pages/products/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  productList: Array<ProductType> = []
  newProduct: ProductType = {
    id: null,
    name: '',
    price: '',
    description: '',
    imgUrl: ''
  }
  mode: string = 'create'

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    return this.productService.getProducts(1, 20).subscribe(
      (resp: any) => {
        this.productList = resp
      }
    )
  }

  loadProduct(newProduct:ProductType, mode = "create") {
    this.mode = mode;
    this.newProduct = { ...newProduct };
  }

  createMode() {
    this.mode = 'create'
  }
  createProduct() { 
    this.productService.createProduct(this.newProduct).subscribe()
    this.getProducts()
    return alert('Produto criado com sucesso')
  }

  editProduct() { 
    this.productService.editProduct(this.newProduct).subscribe()
    this.getProducts()
    return alert('Produto editado com sucesso')
  }

  deleteProduct() { 
    this.productService.deleteProduct(this.newProduct).subscribe()
    this.getProducts()
    return alert('Produto deletado com sucesso')
  }
}
