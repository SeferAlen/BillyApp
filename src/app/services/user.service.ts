import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { User } from '../interface/User';
import { jwtUtil } from '../utility/jwtUtil';

@Injectable()
export class UserService {

    urlPassword = "http://localhost:9090/users/password";
    urlUsers = "http://localhost:9090/users";

    constructor(private _http: HttpClient) {
    }

    changePassword(password: string): Observable<any> {
        const _headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });

        return this._http.post<any>(this.urlPassword, { password: password }, { headers: _headers, observe: "response"});
    }

    getUsers(): Observable<any> {
        const _headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });

        return this._http.get<any>(this.urlUsers, { headers: _headers, observe: "response" });
    }
}