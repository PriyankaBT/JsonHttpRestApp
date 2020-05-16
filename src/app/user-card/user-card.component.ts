import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user-list/user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() user: User;
  
  @Output()
  userClick: EventEmitter<String> = new EventEmitter<String>(); 
  constructor() {

    console.log("USER : ",this.user);
   }
  
  ngOnInit(): void {
  }

  showUser(event, user:User){
   // this.userClick.emit("Inside ShowUserChild\n"+user.id+" "+user.firstName+" "+user.lastName+" "+user.dob+"  "+user.email+" "+user.profession);
  this.userClick.emit(JSON.stringify(user));

  }

}
