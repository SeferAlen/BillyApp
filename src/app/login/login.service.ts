import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { jwtUtil } from '../utility/jwtUtil';
import { environment } from '../../environments/environment';

@Injectable()
export class LoginService {

    url = environment.apiUrl + "login";

    constructor(private _http: HttpClient) {
    }

    login(username: string, password: string): Observable<any> {
        const httpOptions = {   
            headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
             })
        };

        return this._http.post<any>(this.url, { username: username, password: password }, httpOptions);
    }
}             