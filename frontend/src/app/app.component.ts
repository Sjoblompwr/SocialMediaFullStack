import { Component } from '@angular/core';
import { LoginComponent } from './componenets/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:[LoginComponent],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  constructor(public loginComponent:LoginComponent) {}
}
