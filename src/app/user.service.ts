import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import {User} from './user';

@Injectable()
export class UserService {
    users: User[];
    constructor(private http: Http) {

    }

    private oauthUrl = "http://localhost:8000/oauth/token";
    private registerUrl = "http://localhost:8000/api/register";
    private loginUrl = "http://localhost:8000/api/login";
    private logoutUrl = "http://localhost:8000/api/logout";

    register(user: any[]) {
        var headers = new Headers({
            "Content-Type": "application/json",
            "Accept": "application/json"
        });

        var body = JSON.stringify({user: user});

        return this.http.post(this.registerUrl, body, {headers: headers})
            .map(
                (response: Response) => response.json()
            );
    }

    login(user: any[]) {
        var headers = new Headers({
            "Content-Type": "application/json",
            "Accept": 'application/json'
        });

        var body = JSON.stringify({user: user});

        return this.http.post(this.loginUrl, body, {headers: headers})
            .map(
                (response: Response) => {
                    const token = response.json().data.token.access_token;
                    const user = response.json().data.user;
                    return {user: user, token: token};
                }
            );
    }

    logout(token: string): Observable<any>{
        var headers = new Headers({
            "Accept": "application/json",
            "Authorization": "Bearer " + token,
        });

        var body = JSON.stringify({token: token});

        return this.http.get(this.logoutUrl, {headers: headers})
            .map(
                (response: Response) => response.json()
            )
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}