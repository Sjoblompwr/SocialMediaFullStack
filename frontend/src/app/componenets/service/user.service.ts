import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly url = environment.url;
  constructor(private http:HttpClient) { }
  /*
  * Gets all tweets from the backend.
  */
  getLoggedInUser():Observable<User> {
    return this.http.get<User>(`${this.url}/user`);
  }

  getUserById(userId: string):Observable<User> {
    return this.http.get<User>(`${this.url}/user/${userId}`);
  }

  
}
