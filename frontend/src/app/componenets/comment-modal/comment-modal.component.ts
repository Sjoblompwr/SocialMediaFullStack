import { Component, OnInit } from '@angular/core';
import { FeedComponent } from '../feed/feed.component';
import { FeedService } from '../service/feed.service';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-comment-modal',
  templateUrl: './comment-modal.component.html',
  styleUrls: ['./comment-modal.component.css']
})
export class CommentModalComponent{


  constructor(private modalRef:MdbModalRef<FeedComponent>,private feedService:FeedService) { }

  title: string | null = null;
  public user = {
    id: 1,
    username: "davidsjoblom",
    email: "davidsjoblom@hotmail.se",
    profileImageUrl: "",
    friends: []
  
  }
  public tweet = {
    id: 1,
    message: "",
    user: this.user,
    likes: [],
    comments: [{}],
    commentBoolean: false
  }
  public tweetReply = {
    id: 1,
    message: "",
    user: this.user,
    likes: [],
    comments: [],
    commentBoolean: true
  }
  /*
  * Sends the comment back to parent component. Which in turn sends it to the backend.
  */
  public replyToComment(){
    var message:string = (<HTMLInputElement>document.getElementById("comment")).value;
    this.modalRef.close(message);
   
  }
}
