import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
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

  model = new Signup('', '', '', '')

  onSubmit() {
    this.userService.signUp(this.model).subscribe()
    this.route.navigate(['/signin'])
  }
}
