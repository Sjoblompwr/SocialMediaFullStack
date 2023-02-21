import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { FeedService } from '../service/feed.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService:UserService,
              private feedService:FeedService,
              private router:Router) { }

  user:User
  = {   id: 1,
  username: "davidsjoblom",
  email: "davidsjoblom@hotmail.se",
  profilePicture: {id:1,image:""},
  friends: []
};
loggedInUser:User
= {   id: 1,
username: "davidsjoblom",
email: "davidsjoblom@hotmail.se",
profilePicture: {id:1,image:""},
friends: []
};
href!: string;

  ngOnInit(): void {
    this.href = this.router.url;
    const userId = this.href.split("/")[2];

    this.userService.getUserById(userId).subscribe((response:User) => {
      this.user = response;
      this.feedService.getImage(this.user.profilePicture.id).subscribe((response) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => this.user.profilePicture.image = ( reader.result as string));
        reader.readAsDataURL(new Blob([response]));
      });
    });
    this.userService.getLoggedInUser().subscribe((response:User) => {
      this.loggedInUser = response;
    });
  }

}


