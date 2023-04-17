import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componenets/navbar/navbar.component';
import { FeedComponent } from './componenets/feed/feed.component';
import { RightSideBarComponent } from './componenets/right-side-bar/right-side-bar.component';
import { CommentModalComponent } from './componenets/comment-modal/comment-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StatusFeedComponent } from './componenets/status-feed/status-feed.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './componenets/login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './componenets/register/register.component';
import { AuthInterceptor } from './componenets/service/interceptor/auth-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProfileComponent } from './componenets/profile/profile.component';
import { FriendsComponent } from './componenets/friends/friends.component';
import { MdbModalModule, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { RouteReuseStrategy } from '@angular/router';
import { CustomRouteReuseStrategy } from './componenets/service/ReuseStrategy/custom-route-reuse-strategy.service';
import { SettingsModalComponent } from './componenets/modals/settings-modal/settings-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FeedComponent,
    RightSideBarComponent,
    CommentModalComponent,
    StatusFeedComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    FriendsComponent,
    SettingsModalComponent
    
  ],
  imports: [
    NgbModule,
    BrowserModule,
    MdbModalModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor,
     multi: true },
     MdbModalService,
     { provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
