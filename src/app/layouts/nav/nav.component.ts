import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { CookieService } from 'angular2-cookie/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
    showInfoUser: boolean = false;
    token: string;
    constructor( private userService: UserService, private router: Router ) {

    }

    ngOnInit() {  
      this.token = localStorage.getItem('token');
      var user = localStorage.getItem('username');
      var isLoggedin = localStorage.getItem('isLoggedin');
      if (this.token && user && isLoggedin == 'true') {
        this.showInfoUser = true;
      }
    }

    logout() {
      this.userService.logout(this.token)
        .subscribe(
          response => {
            localStorage.clear();
            localStorage.setItem('isLoggedin', 'false');
            this.showInfoUser = false;
            this.router.navigate(['']);
          },
          error => console.log(error)
        );
    }
}
