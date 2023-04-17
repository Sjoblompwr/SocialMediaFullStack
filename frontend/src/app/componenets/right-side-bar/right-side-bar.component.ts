import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-right-side-bar',
  templateUrl: './right-side-bar.component.html',
  styleUrls: ['./right-side-bar.component.css']
})
export class RightSideBarComponent implements OnInit {
  loginComponent:LoginComponent;

  constructor(loginComponent:LoginComponent) {this.loginComponent = loginComponent }

  ngOnInit(): void {
  }


  public logout(){
    localStorage.removeItem("token");
    this.loginComponent.logout();
  }

}
