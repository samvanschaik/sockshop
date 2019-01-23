import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../shared/api.service';
import {Router} from '@angular/router';
import {User} from '../../models/User';
import {UserService} from '../shared/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,
              private apiService: ApiService,
              private userService: UserService,
              private router: Router) {

  }

  form = new FormGroup({
    user_name: new FormControl(),
    user_postcode: new FormControl(),
    user_streetnumber: new FormControl(),
    user_email: new FormControl(),
    user_password: new FormControl()
  });

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.form = this.formBuilder.group({
      user_name: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(25),
        Validators.pattern('[a-zA-Z ]*')]],
      user_postcode: ['', [Validators.required]],
      user_streetnumber: ['', [Validators.required, Validators.maxLength(6)]],
      user_email: ['', [Validators.required]],
      user_password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onRegister(user: User) {
    this.userService.handleLogIn(user, user.user_password);
    this.router.navigateByUrl('/socks');
  }

  onSubmit() {
    const user: User = this.form.value;
    console.log(user);
    this.apiService.addUser(user)
      .subscribe(res => this.onRegister(user));
  }
}
