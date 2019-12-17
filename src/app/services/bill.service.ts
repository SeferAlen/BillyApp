import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Bill } from '../interface/Bill';
import { environment } from '../../environments/environment';
import { jwtUtil } from '../utility/jwtUtil';

@Injectable()
export class BillsService {

    urlUsername: string;
    urlId: string;

    constructor(private _http: HttpClient) {
    }

    getBillsByUsername(username: string): Observable<Bill[]> {

        const httpOptions = {   
            headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
             })
        };

        this.urlUsername = environment.apiUrl + "bills/username/" + username;

        console.log("getBillsByUsername " + this.urlUsername);

        return this._http.get<Bill[]>(this.urlUsername, httpOptions );
    }

    getBillsById(id: string): Observable<Bill[]> {

        const httpOptions = {   
            headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
             })
        };

        this.urlId = environment.apiUrl + "bills/uuid/" + id;

        console.log("getBillsById " + this.urlId);

        return this._http.get<Bill[]>(this.urlId, httpOptions );
    }
}