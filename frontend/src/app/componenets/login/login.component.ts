import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = "";
  password: string = "";

  constructor(private router: Router) {}

  onSubmit() {
    // Perform authentication logic here
    // ...

    // Navigate to the home page after successful login
    this.router.navigate(['/home']);
  }
}
