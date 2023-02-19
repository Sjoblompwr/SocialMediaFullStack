import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './componenets/feed/feed.component';
import { FriendsComponent } from './componenets/friends/friends.component';
import { LoginComponent } from './componenets/login/login.component';
import { RegisterComponent } from './componenets/register/register.component';
import { StatusFeedComponent } from './componenets/status-feed/status-feed.component';

const routes: Routes = [
  {path:"", component:FeedComponent},
  {path:":username/status/:tweetId",component:StatusFeedComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'friends', component: FriendsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
