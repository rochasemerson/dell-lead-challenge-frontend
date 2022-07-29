import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { editUserType, userType } from './user';

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

  editUserBody: editUserType = {
    name: '',
    email: ''
  }

  mode: string = ''

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit(): void {
    this.getUser()
  }

  token: any = localStorage.getItem('currentUser')
  user_token = JSON.parse(this.token)

  getUser() {
    if (this.user_token) {
      this.userService.getUser(this.user_token.acess_token).subscribe(
        (resp: any) => {
          this.user = resp
        }
      )
    } else {
      this.route.navigate(['/signin'])
    }
  }

  editMode() {
    this.mode = 'edit'
  }

  editUser() {
    if (this.editUserBody.name.trim() === '') this.editUserBody.name = this.user.name
    if (this.editUserBody.email.trim() === '') this.editUserBody.email = this.user.email
    this.userService.editUser(this.user_token.acess_token, this.editUserBody).subscribe(
      (resp: any) => {
        this.user = resp
      }
    )
  }

  deleteMode() {
    this.mode = 'delete'
  }

  deleteUser() {
    this.userService.deleteUser(this.user_token.acess_token).subscribe()
    alert('User deleted')
    this.route.navigate(['/'])
  }

}
