import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from "@angular/router";

import { Signin } from './signin';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private userService: UserService,
    private route: Router
    ) { }

  ngOnInit(): void {
  }

  model = new Signin('', '')

  async signIn() {
    await this.userService.signIn(this.model).subscribe(
      (resp: any) => {
        const currentUser = JSON.stringify(resp)
        localStorage.setItem('currentUser', currentUser)
      }
    )
    this.route.navigate(['/'])
  }
}
