import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  auth = localStorage.getItem('id_token');
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const re = "login";
    if (request.url.includes(re) === false) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.auth}`
        }
      });
    }
    else {
      request = request.clone({

      });
    }
    //If a 401 error is caught, token will be deleted, since 401 error is assumed to be expired token.
    return next.handle(request);
    // .pipe(
    //   catchError((err: HttpErrorResponse) => {
    //     if (err.status === 401) {
    //       localStorage.removeItem('user');
    //       localStorage.removeItem('id_token');
    //       alert("Login token has expired, please login again.");
    //       window.location.href = "/login";

    //     }
    //     return throwError(() => err.error);
    //   }

    //   )
    // ) as Observable<HttpEvent<any>>;;


  }



}

