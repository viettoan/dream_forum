import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class AuthService {
	response: Response;
	constructor(private http: Http) {

    }

	getAuth() {
		
    }
}
