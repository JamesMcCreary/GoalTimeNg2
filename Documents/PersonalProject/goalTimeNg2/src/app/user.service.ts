// import { Injectable } from '@angular/core';
// import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
// import { User } from './_models/user';
// import { Observable } from 'rxjs/Rx';
// import 'rxjs/Rx';
// import {Router, ActivatedRoute, Params} from '@angular/router';

// @Injectable()
// export class UserService {

// 	constructor(private http: Http, private activatedRoute: ActivatedRoute) { }

// 	getUsers() {
// 		return this.http.get(`http://localhost:8080/getUsers`)
// 		.map(response => <User[]> response.json());
// 	}
// }

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
 
import { AppConfig } from './app.config';
import { User } from './_models/user';
 
@Injectable()
export class UserService {
    constructor(private http: Http, private config: AppConfig) { }
 
    getAll() {
        return this.http.get(this.config.apiUrl + '/users', this.jwt()).map((response: Response) => response.json());
    }
 
    getById(id: string) {
        return this.http.get(this.config.apiUrl + '/users/' + id, this.jwt()).map((response: Response) => response.json());
    }
 
    create(user: User) {
        return this.http.post(this.config.apiUrl + '/users/register', user, this.jwt());
    }
 
    update(user: User) {
        return this.http.put(this.config.apiUrl + '/users/' + user.id, user, this.jwt());
    }
 
    delete(id: string) {
        return this.http.delete(this.config.apiUrl + '/users/' + id, this.jwt());
    }
 
    // private helper methods
 
    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}