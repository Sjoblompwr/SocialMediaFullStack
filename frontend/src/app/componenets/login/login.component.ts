import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = "";
  password: string = "";

  constructor(private router: Router,private loginService:LoginService) {}

  onSubmit() {
    var username = (<HTMLInputElement>document.getElementById("inputEmail")).value;
    var password = (<HTMLInputElement>document.getElementById("inputPassword")).value;
    this.loginService.login({username:username, password:password}).subscribe((data) => {
      localStorage.setItem('token', JSON.parse(JSON.stringify(data)).token);
      console.log(JSON.stringify(data));
    }, (error) => {
      console.error(error);
    });

  }
}
