import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { FeedComponent } from '../feed/feed.component';

@Component({
  selector: 'app-comment-modal',
  templateUrl: './comment-modal.component.html',
  styleUrls: ['./comment-modal.component.css']
})
export class CommentModalComponent{


  constructor(public modalRef: MdbModalRef<FeedComponent>) { }

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
    comments: [],
    commentBoolean: false
  }

  public replyToComment(){
    var message:string = (<HTMLInputElement>document.getElementById("comment")).value;
    this.modalRef.close(message);
   
  }
}
