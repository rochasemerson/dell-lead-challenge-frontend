import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from "@angular/router";

import { Signup } from "./signup";

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private userService: UserService,
    private route: Router
    ) { }

  ngOnInit(): void {
  }

  model = new Signup('', '', '', '', '')

  async onSubmit() {
    if (this.model.password !== this.model.pwConfirm) return alert('Passwords do not match')
    await this.userService.signUp(this.model).subscribe(
      (resp: any) => {
        const currentUser = JSON.stringify(resp)
        localStorage.clear()
        localStorage.setItem('currentUser', currentUser)
      }
    )
    this.route.navigate(['/'])
  }
}
