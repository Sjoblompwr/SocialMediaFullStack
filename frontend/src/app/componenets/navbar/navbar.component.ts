import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }
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

  public reRoute() {
    this.router.navigate(["/profile"+"/"+this.user.id]);

  }

}
