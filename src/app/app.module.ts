import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserCardComponent } from './user-card/user-card.component';
import { ImagePipe } from './image.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    HomeComponent,
    UserListComponent,
    NotFoundComponent,
    UserCardComponent,
    ImagePipe
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
