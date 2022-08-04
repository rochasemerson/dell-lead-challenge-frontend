import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NpsService } from 'src/app/services/nps/nps.service';
import { ProductService } from 'src/app/services/product/product.service';
import { UserService } from 'src/app/services/user/user.service';
import { ProductType } from '../products/product';
import { userType } from '../user/user';

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
  user: userType = {
    id: '',
    name: '',
    email: ''
  }
  productId: any = this.route.snapshot.params
  userScore: number = 0
  productScore: number = 88

  constructor(
    private productService: ProductService,
    private userService: UserService,
    private npsService: NpsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getProduct()
    this.getUser()
    setTimeout(() => {
      this.getScore()
    }, 500);
  }

  getProduct() {
    return this.productService.getProduct(this.productId.id).subscribe(
      (resp: any) => {
        this.productInfo = resp
      }
    )
  }

  getUser() {
    const token: any = localStorage.getItem('currentUser')
    const user_token = JSON.parse(token)

    if (token) {
      return this.userService.getUser(user_token.acess_token).subscribe(
        (resp: any) => {
          this.user = resp
        }
      )
    } else return
  }

  getScore() {
    if (this.user.id != '') {
      this.npsService.getScore(this.user.id, this.productId.id).subscribe(
        (resp: any) => {
          this.userScore = resp
        }
      )
    } else return
  }
}
