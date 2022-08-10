import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
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
  productInfo!: ProductType;
  user?: userType
  productId: any = this.route.snapshot.params
  productScore!: number
  token: any = localStorage.getItem('currentUser')
  user_token = JSON.parse(this.token)
  render = false

  constructor(
    private productService: ProductService,
    private userService: UserService,
    private npsService: NpsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getProduct()
    this.getUser()
    this.getNps()
  }

  getProduct() {
    return this.productService.getProduct(this.productId.id).subscribe(
      (resp: any) => {
        this.productInfo = resp
        this.render = true
      }
    )
  }

  getUser() {
    if (this.token) {
      return this.userService.getUser(this.user_token.acess_token).subscribe(
        (resp: any) => {
          this.user = resp
          this.render = true
        }
      )
    } else return
  }

  getNps() {
    this.npsService.getNps(this.productId).subscribe(
      (resp: any) => {
        this.productScore = resp
      }
    )
  }

  updateNps(e: any) {
    this.getNps()
  }
}
