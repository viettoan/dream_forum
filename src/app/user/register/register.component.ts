import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserService } from "../../user.service";
import {User} from '../../user';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    validateForm: FormGroup;
    users: User[];

    constructor(fb: FormBuilder, private userService: UserService, private router: Router){
        this.validateForm = fb.group({
            'name' : [null, Validators.compose([Validators.required])],
            'email' : [null, Validators.compose([Validators.email])],
            'password' : [null, Validators.compose([Validators.required, Validators.minLength(6)])]
        });
    }

    ngOnInit() {
    }
    submitForm(value: any) {
        this.userService.register(value)
          .subscribe(
            (response) => {
              if(response.status == 201) {
                this.router.navigate(['/login']);
              }
            }
          );
      }
}
