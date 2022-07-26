import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { userType } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: userType = {
    id: '',
    name: '',
    email: '',
  }
  
  constructor(private userService: UserService) { }
  
  ngOnInit(): void {
    const token: any = localStorage.getItem('currentUser')
    const user_token = JSON.parse(token)
    this.userService.getUser(user_token.acess_token).subscribe(
      (resp: any) => {
        this.user = resp
      }
    )
  }
  
}
