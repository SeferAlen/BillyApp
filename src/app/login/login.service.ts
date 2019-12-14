import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { jwtUtil } from '../utility/jwtUtil';

@Injectable()
export class LoginService {

    url = "http://localhost:9090/login";

    constructor(private _http: HttpClient) {
    
    }

    login(username: string, password: string): Observable<any> {
        const httpOptions = {   
            headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
             })
        };

        return this._http.post(this.url, { username: username, password: password }, { responseType: 'text' });
    }
}