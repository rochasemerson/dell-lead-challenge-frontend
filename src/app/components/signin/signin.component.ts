import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Signin } from './signin';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  model = new Signin('', '')

  signIn() {
    this.userService.signIn(this.model)
      .subscribe((resp) => {
        console.log(resp);
        
      })

  }
}
