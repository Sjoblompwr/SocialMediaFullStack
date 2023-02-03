import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componenets/navbar/navbar.component';
import { FeedComponent } from './componenets/feed/feed.component';
import { RightSideBarComponent } from './componenets/right-side-bar/right-side-bar.component';
import { CommentModalComponent } from './componenets/comment-modal/comment-modal.component';
import { MdbModalModule, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StatusFeedComponent } from './componenets/status-feed/status-feed.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './componenets/login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './componenets/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FeedComponent,
    RightSideBarComponent,
    CommentModalComponent,
    StatusFeedComponent,
    LoginComponent,
    RegisterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbModalModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MdbModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
