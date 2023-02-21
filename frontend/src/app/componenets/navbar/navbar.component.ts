import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userService:UserService) { }
  public user:User = {
    id: 1,
    username: "davidsjoblom",
    email: "davidsjoblom@hotmail.se",
    profilePicture: {id:1,image:""},
    friends: []
};
  public numberOfFriends = 0;
  ngOnInit(): void {
    this.userService.getLoggedInUser().subscribe((response:User) => {
      this.user = response;
      this.numberOfFriends = this.user.friends.length;
    });
  }

}
