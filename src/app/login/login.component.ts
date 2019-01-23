import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {User} from '../../models/User';
import {ApiService} from '../shared/api.service';
import {AuthenticationService} from '../shared/authentication.service';
import {Router} from '@angular/router';
import {UserService} from '../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router) {
    this.createForm();
  }

    form = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });

  ngOnInit() {

  }

  createForm() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogIn(user: User) {
    this.userService.handleLogIn(user, this.form.getRawValue().password);
    this.router.navigateByUrl('/user');
  }


  onSubmit() {
    this.authenticationService.authenticate(this.form.getRawValue().email, this.form.getRawValue().password)
      .subscribe(
        res => this.onLogIn(res),
        error => console.log('error in authenticate login') // Invalid Credential Error.
      );
  }
}


