import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  constructor(fb: FormBuilder, private userService: UserService) { 
  	this.validateForm = fb.group({
            'email' : [null, Validators.compose([Validators.email])],
            'password' : [null, Validators.compose([Validators.minLength(6)])]
        })
  }

  ngOnInit() {
  }

  submitForm(value: any) {
  console.log(value);
    this.userService.login(value)
      .subscribe(
        (res) => {
          console.log(res);
        }
      );
  }
}
