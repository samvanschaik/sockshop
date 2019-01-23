import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../shared/api.service';

@Component({
  selector: 'app-user-modify',
  templateUrl: './user-modify.component.html',
  styleUrls: ['./user-modify.component.scss']
})
export class UserModifyComponent implements OnInit {
  @Input() user_email: string;
  @Input() user: User;

  constructor(private formBuilder: FormBuilder,
              private apiService: ApiService) {

  }

  updateStatus: String = '';

  form = new FormGroup({
    user_name: new FormControl(),
    user_postcode: new FormControl(),
    user_streetnumber: new FormControl(),
    user_email: new FormControl(),
    user_password: new FormControl(),
    user_roles: new FormControl(),
  });

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.form = this.formBuilder.group({
      user_name: [this.user.user_name, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(25),
        Validators.pattern('[a-zA-Z ]*')]],
      user_postcode: [this.user.user_postcode, [Validators.required]],
      user_streetnumber: [this.user.user_streetnumber, [Validators.required, Validators.maxLength(6)]],
      user_email: [this.user.user_email, [Validators.required]],
      user_password: [this.user.user_password, [Validators.required, Validators.minLength(6)]],
      user_roles: [this.user.user_roles]
    });
  }

  onSubmit() {
    const user: User = this.form.value;

    this.apiService.updateUser(this.user_email, user).
    subscribe(
      res => this.updateStatus = 'success',
      // TODO Implement proper error handling. User still has to guess what is wrong.
      error =>  this.updateStatus = 'error'
    );
  }
}
