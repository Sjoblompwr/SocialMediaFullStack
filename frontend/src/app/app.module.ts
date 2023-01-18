import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componenets/navbar/navbar.component';
import { FeedComponent } from './componenets/feed/feed.component';
import { RightSideBarComponent } from './componenets/right-side-bar/right-side-bar.component';
import { CommentModalComponent } from './componenets/comment-modal/comment-modal.component';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FeedComponent,
    RightSideBarComponent,
    CommentModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
