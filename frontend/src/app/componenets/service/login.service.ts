import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { LoginRequest } from '../interfaces/loginRequest';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly url = environment.url;
  constructor(private http:HttpClient) { }


  public login(loginRequest:LoginRequest):Observable<string> {
    return this.http.post<string>(`${this.url}/login`, loginRequest);
  }
}
