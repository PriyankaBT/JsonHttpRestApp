import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers:  [UserService]
})
export class UserListComponent {

  
  users:User[];
  userChild:User;
  constructor(public userService: UserService) { 

    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe((resp: any) =>{
      console.log("RESP : ", resp)
      this.users = resp;
    }, (err)=> {
      console.log("ERROR : ", err)
    });
  }

 /* getUsers() {
    this.userService.getUsers()
    .then(data => {
    this.userList = data;
    console.log(this.userList);
    });
    }*/

  showUserFromParent = function(user1){
    alert("Inside showUserFromParent \n"+user1);
    this.userChild=JSON.parse(user1);
    alert(this.userChild);
  }
  getDetails = (user) => {
    alert(JSON.stringify(user));
  }

}
