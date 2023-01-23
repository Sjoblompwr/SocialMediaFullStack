import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './componenets/feed/feed.component';
import { StatusFeedComponent } from './componenets/status-feed/status-feed.component';

const routes: Routes = [
  {path:"", component:FeedComponent},
  {path:":username/status/:tweetId",component:StatusFeedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
