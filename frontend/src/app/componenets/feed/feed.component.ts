import { Component, OnInit } from '@angular/core';
import { Tweet } from '../interfaces/tweet';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor() { }

  public posts = [5, 4, 3, 2, 1];

  public user = {
    id: 1,
    username: "davidsjoblom",
    email: "davidsjoblom@hotmail.se",
    profileImageUrl: "",
    friends: []
  
  }

  public tweets:Tweet[] = [];
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

  public updateStatus(){
    var message = (<HTMLInputElement>document.getElementById("status")).value;
     let newTweet = {
      id: this.tweets.length + 1, 
      message: message, 
      user: this.user, 
      likes: [], 
      comments: [], 
      commentBoolean: false
    };
    this.tweets.push(newTweet);
  }

}
