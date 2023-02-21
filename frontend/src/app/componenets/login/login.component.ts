import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  private _isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn = this._isLoggedIn.asObservable();

  constructor(private router: Router,private loginService:LoginService) {
    const token = localStorage.getItem("token");
    this._isLoggedIn.next(!!token);
  }

  onSubmit() {

    var username = (<HTMLInputElement>document.getElementById("inputEmail")).value;
    var password = (<HTMLInputElement>document.getElementById("inputPassword")).value;
    this.loginService.login({username:username, password:password}).subscribe((data) => {
      localStorage.setItem('token', JSON.parse(JSON.stringify(data)).token);
      console.log(JSON.stringify(data));
      this._isLoggedIn.next(true);
      this.router.navigate(['']) .then(() => {
        window.location.reload();
      });
    }, (error) => {
      console.error(error);
    });

  }
}
