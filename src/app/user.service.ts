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

    getAccessToken() {
        var headers = new Headers({
            "Content-Type": "application/json",
            "Accept": "application/json"
        });

        let postData = {
            grant_type: "password",
            client_id: 4,
            client_secret: "cDzjvdMkmoW1sVrPXZDLbmTNAFP4wn0mkdcYY5rt",
            username: "viettoan290696@gmail.com",
            password: "snsdgg09",
            scope: ""
        }

        return this.http.post(this.oauthUrl, JSON.stringify(postData), {
            headers: headers
        })
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }


    getUsers(accessToken: string): Observable<User[]> {

        var headers = new Headers({
            "Accept": "application/json",
            "Authorization": "Bearer " + accessToken,
        });

        return this.http.get('http://localhost:8000/api/users', {
            headers: headers
        })
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    register(user: any[]) {
        var headers = new Headers({
            "Content-Type": "application/json",
            "Accept": "application/json"
        });

        var body = JSON.stringify({user: user});

        return this.http.post(this.registerUrl, body, {headers: headers})
            .map(
                (res: Response) => res.json()
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
                (res: Response) => res.json()
            );
    }
}