import { Injectable } from '@angular/core';
import { User } from './user-list/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
//  userList1: Array<User>;
  apiUrl = 'http://localhost:3000';
  constructor(public httpClient: HttpClient) {
    console.log("Hello RestServiceProvider Provider");
    }
/*    this.userList1 = [
      {id: 1, firstName :'Priyanka', lastName :'Murkute',email :'abc@yahoo.com', profession:'Trainer',dob: new Date(1986, 11, 25), imageUrl:'assets/IMG1.jpeg'},
     {id: 2, firstName :'Jayesh', lastName :'Murkute',email :'aa@gmail.com', profession:'Chartered Accountant',dob: new Date(1987, 3, 1), imageUrl:'assets/IMG2.jpeg'},
    {id: 3, firstName :'Bhupendra', lastName :'Murkute',email :'xyz@gmail.com', profession:'SOFTWARE eNGINEER',dob:new Date(1988, 3, 15), imageUrl:'assets/IMG1.jpeg'}    
    ]*/
   
    getUsers(): Observable<User[]> {
      return this.httpClient.get<User[]>(this.apiUrl+"/users");
    }
   
  
    addUser(user:User):Observable<User> {
      let options={
        headers:{
          "Content-Type":"application/json",
          "Accept":"application/json"
        }
      }
      return this.httpClient.post<User>(this.apiUrl, user, options);
    }
  

  /*  getUsers() {
      return new Promise(resolve => {
      this.http.get(this.apiUrl+'/users').subscribe(data => {
      resolve(data);}, 
      err => {
      console.log(err);
      });
      });
      }*/
  getUserById(id:number) {}
 
  deleteUser(id:number){}
updateUser(user:User) {} 

}
