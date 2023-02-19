import { Component, OnInit } from '@angular/core';
import { profilePicture } from '../interfaces/profilePicture';
import { User } from '../interfaces/user';
import { FeedService } from '../service/feed.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  singularImageUrl: any[] = [];

  constructor(private userService:UserService,private feedService:FeedService) { }
  user?:User;
  ngOnInit(): void {
    this.userService.getLoggedInUser().subscribe((response:User) => {
      this.user = response;
      this.getPictures();
    });

   
  }

  getPictures(){
    this.singularImageUrl = new Array(this.user?.friends.length);
    this.user?.friends.forEach((friend,index) => {
      this.feedService.getImage(friend.profilePicture.id).subscribe((response) => {
        console.log(friend.profilePicture.id)
      const reader = new FileReader();
      reader.addEventListener('load', () => this.singularImageUrl[index] = ( reader.result as string));
      reader.readAsDataURL(new Blob([response]));
      });
    });
  }


}



