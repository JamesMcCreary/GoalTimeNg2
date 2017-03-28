import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
 
import { AppConfig } from '../app.config';
 
@Injectable()
export class AuthenticationService {
    constructor(private http: Http, private config: AppConfig) { }
 
    login(username: string, password: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let data = JSON.stringify({username: username, password: password});

        console.log("The 'this.config.apiUrl is': ", this.config.apiUrl);
        console.log("'data' being passed into the API call is: ", data);

        return this.http.post(this.config.apiUrl + '/authenticate', data, options)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                console.log("The response from authenticate from the backend is: ", response);
                let user = response.json();
                
                if (user) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }
 
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
// }this.config.apiUrl + '/authenticate'