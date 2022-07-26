import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { userType } from '../user/user';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService) { }
  user: userType = {
    id: '',
    name: '',
    email: '',
  }
  route: any

  ngOnInit(): void {
    const token: any = localStorage.getItem('currentUser')
    const user_token = JSON.parse(token)
    this.userService.getUser(user_token.acess_token).subscribe(
      (resp: any) => {
        this.user = resp
        this.route = `/user/${this.user.name}`
      }
    )
  }
}
