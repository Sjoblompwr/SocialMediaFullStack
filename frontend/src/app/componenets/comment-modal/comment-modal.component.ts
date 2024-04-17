import { Component, OnInit } from '@angular/core';
import { FeedComponent } from '../feed/feed.component';
import { FeedService } from '../service/feed.service';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Tweet } from '../interfaces/tweet';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-comment-modal',
  templateUrl: './comment-modal.component.html',
  styleUrls: ['./comment-modal.component.css']
})
export class CommentModalComponent implements OnInit{
  commentorImgUrl: string[] = [];

  tweets: Tweet[] = [];




  constructor(private modalRef:MdbModalRef<FeedComponent>,private feedService:FeedService) { }
  ngOnInit(): void {
    this.getProfilePicture();
  }

  title: string | null = null;
  singularImageUrl: string = "";
  private user:User = {
    id: 1,
    username: "davidsjoblom",
    email: "davidsjoblom@hotmail.se",
    profilePicture: {id:1,image:""},
    friends: []
  
  }
  public tweet = {
    id: 1,
    message: "",
    user: this.user,
    likes: [],
    comments: [] as Tweet[] ,
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

  public getProfilePicture(){
    this.feedService.getImage(this.tweet.user.profilePicture.id).subscribe((response) => {
      const reader = new FileReader();
      reader.addEventListener('load', () => this.singularImageUrl = ( reader.result as string));
      reader.readAsDataURL(new Blob([response]));
      console.log(this.singularImageUrl);
    });
  }

  // Resizes the textarea when as the user types.
  autoResizeTextarea($event: Event) {
    const textArea = $event.target as HTMLTextAreaElement;
    textArea.style.overflow = 'hidden';
    textArea.style.height = 'auto';
    textArea.style.height = textArea.scrollHeight + 'px';
  }
}
