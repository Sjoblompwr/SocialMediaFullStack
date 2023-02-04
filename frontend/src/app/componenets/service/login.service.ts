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


  login(loginRequest:LoginRequest):Observable<any> {
    return this.http.post<any>(`${this.url}/login`, loginRequest);
  }
}
