import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { UserService } from '../service/user.service';
import { FeedService } from '../service/feed.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userService:UserService,private router:Router,private feedService:FeedService) { }
  public user:User = {
    id: 1,
    username: "davidsjoblom",
    email: "davidsjoblom@hotmail.se",
    profilePicture: {id:1,image:""},
    friends: []
};
  profilePicture: string = "";
  public numberOfFriends = 0;
  ngOnInit(): void {
    this.userService.getLoggedInUser().subscribe((response:User) => {
      this.user = response;
      this.numberOfFriends = this.user.friends.length;
    });
    this.feedService.getImage(this.user.profilePicture.id).subscribe((response) => {
      const reader = new FileReader();
      reader.addEventListener('load', () => this.profilePicture = ( reader.result as string));
      reader.readAsDataURL(new Blob([response]));
    });
  }
  

  public reRoute() {
    this.router.navigate(["/profile"+"/"+this.user.id]);

  }

}
