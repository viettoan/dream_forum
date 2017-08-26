import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {UserService} from '../../user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  constructor(fb: FormBuilder, private userService: UserService, private router: Router) { 
  	this.validateForm = fb.group({
            'email' : [null, Validators.compose([Validators.email])],
            'password' : [null, Validators.compose([Validators.minLength(6)])]
        })
  }

  ngOnInit() {
  }

  submitForm(value: any) {
    this.userService.login(value)
      .subscribe(
        response => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('username', response.user);
          var isLoggedin = localStorage.setItem('isLoggedin', 'true');
          this.router.navigate(['']);

        },
        error => console.log(error)
      );
  }
}
