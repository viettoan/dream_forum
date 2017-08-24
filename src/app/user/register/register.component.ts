import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserService } from "../../user.service";
import {User} from '../../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    validateForm: FormGroup;
    users: User[];

    constructor(fb: FormBuilder, private userService: UserService){
        this.validateForm = fb.group({
            'name' : [null, Validators.compose([Validators.required])],
            'email' : [null, Validators.compose([Validators.email])],
            'password' : [null, Validators.compose([Validators.minLength(6)])]
        })
        this.userService.getAccessToken()
            .subscribe(data => {
                this.getUsers(data.access_token)
            });
    }

    ngOnInit() {
    }
    submitForm(value: any) {
        this.userService.register(value)
          .subscribe(
            (res) => {
              console.log(res);
            }
          );
      }
    getUsers(accessToken: string) {
        this.userService.getUsers(accessToken)
            .subscribe(
                users => {
                    this.users = users;
                    console.log(users);
                });
    }
}
