import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';
import {CookieService} from 'angular2-cookie/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
    showInfoUser: boolean = false;
    username: string;
    constructor() {

    }

    ngOnInit() {  
      var token = localStorage.getItem('token');
      var user = localStorage.getItem('username');
      var isLoggedin = localStorage.getItem('isLoggedin');
      if (token && user && isLoggedin == 'true') {
        this.showInfoUser = true;
      }
      console.log(this.showInfoUser);
    }
}
