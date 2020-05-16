import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { User } from './user-list/user.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'MyBasicApp';

  public constructor(private titleService: Title ) {
      titleService.setTitle('My User Service Rest App')
  }
}



