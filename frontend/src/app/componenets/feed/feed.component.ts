import { Component, OnInit } from '@angular/core';
import { CommentModalComponent } from '../comment-modal/comment-modal.component';
import { Tweet } from '../interfaces/tweet';
import { MdbModalService } from 'mdb-angular-ui-kit/modal';
import { FeedService } from '../service/feed.service';
import { profilePicture } from '../interfaces/profilePicture';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(private modalService: MdbModalService,private feedService:FeedService) { }

  public posts = [5, 4, 3, 2, 1];

  public user = {
    id: 1,
    username: "davidsjoblom",
    email: "davidsjoblom@hotmail.se",
    profilePicture: {id:1,image:""},
    friends: []

  }

  imageUrl: string = "";
  singularImageUrl: string[] = [];

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
   this.getAllTweets();
  //  Need to create picure interface and such.
  
  }
  /*
  * Gets all tweets from the backend.
  */
  public getAllTweets() {
    this.feedService.getFeed().subscribe((response:Tweet[]) => {
      console.log(response);
      this.tweets = response;
      this.tweets.reverse();
      this.singularImageUrl = new Array(this.tweets.length);
      this.tweets.forEach((tweet,index) => {
        this.feedService.getImage(tweet.user.profilePicture.id).subscribe((response) => {
        console.log(tweet.user.profilePicture.id)
        const reader = new FileReader();
        reader.addEventListener('load', () => this.singularImageUrl[index] = ( reader.result as string));
        reader.readAsDataURL(new Blob([response]));
        });
      });
  });
  }
  /*
  * Deletes a tweet from the backend.
  */
  public deleteTweet(tweet:Tweet) {
    this.feedService.deleteTweet(tweet).subscribe((response:void) => {
      console.log(response);
    });
  }
  /*
  * Updates the status of the user.
   */
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
    //Need to implement to send tweet to backend.
    this.feedService.postTweet(newTweet).subscribe((response:Tweet) => {
      this.tweets.push(response);
    });

  }

  /*
  * Opens a modal for commenting on a tweet.
  */
  public commentModal(tweet: Tweet) {
    this.modalService.open(CommentModalComponent, {
      data: { title: 'Custom title', tweet: tweet }
    }).onClose.subscribe((message: string) => {
      if (message.length > 0) {

        let newTweet = {
          id: 1,
          message: message,
          user: JSON.parse(localStorage.getItem("user") as string),
          likes: [],
          comments: [],
          commentBoolean: true
        };
        let response = {responeToId: tweet.id, message: message};
        tweet.comments.push(newTweet);
        this.feedService.responseTweet(response).subscribe((response:Tweet) => {
          console.log(response);
        });
      }
    });
  }

  /*
  * User likes a tweet.
   */
  public like(tweet: Tweet) {
    let currentUser = JSON.parse(localStorage.getItem("user") as string);
    let like = {
      id: 0,
      user: currentUser
    }
    //tweet.likes.push(like);
    //Need to implement to send like to backend.
    this.feedService.likeTweet(tweet).subscribe((response:Tweet) => {
      tweet  = response;
      this.tweets.map((t:Tweet) => {
        if(t.id == tweet.id) {
          t.likes = tweet.likes;
        }
      });
    });
  }
}
