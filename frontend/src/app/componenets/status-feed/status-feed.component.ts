import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MdbModalService } from 'mdb-angular-ui-kit/modal';
import { CommentModalComponent } from '../comment-modal/comment-modal.component';
import { Tweet } from '../interfaces/tweet';
import { FeedService } from '../service/feed.service';

@Component({
  selector: 'app-status-feed',
  templateUrl: './status-feed.component.html',
  styleUrls: ['./status-feed.component.css']
})
export class StatusFeedComponent implements OnInit {
  href!: string;

  someSubscription: any;  
  constructor(private modalService: MdbModalService,
    private router:Router,
    private feedService:FeedService,
    private route: ActivatedRoute) { 
  
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.someSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Here is the dashing line comes in the picture.
        // You need to tell the router that, you didn't visit or load the page previously, so mark the navigated flag to false as below.
        this.router.navigated = false;
      }
    });}
  public user = {
    id: 1,
    username: "davidsjoblom",
    email: "davidsjoblom@hotmail.se",
    profileImageUrl: "",
    friends: []

  }

  public tweets: Tweet[] = [];
  public tweet:Tweet = {
    id: 1,
    message: "",
    user: this.user,
    likes: [],
    comments: this.tweets,
    commentBoolean: false
  }
  ngOnInit(): void {
    this.href = this.router.url;
    const username = this.href.split("/")[1];
    const tweetId = +this.href.split("/")[3];
    console.log(username);
    console.log(tweetId); 
    this.getTweetById(tweetId);
  }

  public getTweetById(tweetId:number) {
    this.feedService.getTweetById(tweetId).subscribe((response:Tweet) => {
      this.tweet = response;
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
    tweet.likes.push(like);
    //Need to implement to send like to backend.
  }

  public reRoute(username:string,tweetId:number) {
    this.router.navigate(["/" + username + "/status/" + tweetId]);
    
  }


}


