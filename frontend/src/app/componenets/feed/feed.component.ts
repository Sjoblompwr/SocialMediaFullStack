import { Component, OnInit } from '@angular/core';
import { CommentModalComponent } from '../comment-modal/comment-modal.component';
import { Tweet } from '../interfaces/tweet';
import { MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(private modalService: MdbModalService) { }

  public posts = [5, 4, 3, 2, 1];

  public user = {
    id: 1,
    username: "davidsjoblom",
    email: "davidsjoblom@hotmail.se",
    profileImageUrl: "",
    friends: []

  }

  public tweets: Tweet[] = [];
  public tweet = {
    id: 1,
    message: "",
    user: this.user,
    likes: [],
    comments: [],
    commentBoolean: false
  }
  ngOnInit(): void {
    localStorage.setItem("user", JSON.stringify(this.user));
  }

  public updateStatus() {
    var message: string = (<HTMLInputElement>document.getElementById("status")).value;

    let newTweet = {
      id: this.tweets.length + 1,
      message: message,
      user: this.user,
      likes: [],
      comments: [],
      commentBoolean: false
    };
    this.tweets.push(newTweet);
    console.log("Send tweet to backend.");
  }


  public commentModal(tweet: Tweet) {

    this.modalService.open(CommentModalComponent, {
      data: { title: 'Custom title', tweet: tweet }
    }).onClose.subscribe((message: string) => {
      if (message) {
        let newTweet = {
          id: this.tweets.length + 1,
          message: message,
          user: this.user,
          likes: [],
          comments: [],
          commentBoolean: false
        };

        tweet.comments.push(newTweet);


      }
    });
  }
}
