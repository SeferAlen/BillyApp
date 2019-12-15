import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {  
    
    constructor() {
        console.log("TokenInterceptor  created");
    }  
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("TokenInterceptor  using ...");
    if (localStorage.getItem('token') != null) {

        console.log("Before token set");

        request = request.clone({
        setHeaders: {
            Authorization: 'Bearer: ' + localStorage.getItem('token')
        }
        });    
        console.log(request);
        return next.handle(request);

    } else {

        console.log("No token set");
        return next.handle(request);
    }
  }
}