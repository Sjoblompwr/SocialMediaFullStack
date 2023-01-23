import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tweet } from '../interfaces/tweet';

@Component({
  selector: 'app-status-feed',
  templateUrl: './status-feed.component.html',
  styleUrls: ['./status-feed.component.css']
})
export class StatusFeedComponent implements OnInit {
  href!: string;

  constructor(private router:Router) { }
  
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
    comments: this.tweets,
    commentBoolean: false
  }
  ngOnInit(): void {
    this.href = this.router.url;
    const username = this.href.split("/")[1];
    const tweetId = this.href.split("/")[3];
    console.log(username);
    console.log(tweetId); 
  }

}


