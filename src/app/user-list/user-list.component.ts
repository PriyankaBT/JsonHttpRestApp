import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers:  [UserService]
})
export class UserListComponent implements OnInit {

  userList: Array<User>;
  userChild:User;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
 //   this.userList = [
  //    {id: 1, firstName :'Priyanka', lastName :'Murkute',email :'abc@yahoo.com', profession:'Trainer',dob: new Date(1986, 11, 25), imageUrl:'assets/IMG1.jpeg'},
  //    {id: 2, firstName :'Jayesh', lastName :'Murkute',email :'aa@gmail.com', profession:'Chartered Accountant',dob: new Date(1987, 3, 1), imageUrl:'assets/IMG2.jpeg'},
  //    {id: 3, firstName :'Bhupendra', lastName :'Murkute',email :'xyz@gmail.com', profession:'SOFTWARE eNGINEER',dob:new Date(1988, 3, 15), imageUrl:'assets/IMG1.jpeg'}    
  //  ]
  this.userList=this.userService.getUsers();
  }
  showUserFromParent = function(user1){
    alert("Inside showUserFromParent \n"+user1);
    this.userChild=JSON.parse(user1);
    alert(this.userChild);
  }
  getDetails = (user) => {
    alert(JSON.stringify(user));
  }
}
