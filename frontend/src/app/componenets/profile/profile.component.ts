import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { FeedService } from '../service/feed.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private feedService:FeedService) { }

  user?:User;
  ngOnInit(): void {

    this.feedService.getTweetById(1).subscribe((response) => {
    
      this.user = response.user;
      console.log(this.user);
    });
  }

}


