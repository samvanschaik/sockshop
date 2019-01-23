import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Sock} from '../../models/Sock';
import {ApiService} from '../shared/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sock-modify',
  templateUrl: './sock-modify.component.html',
  styleUrls: ['./sock-modify.component.scss']
})
export class SockModifyComponent implements OnInit {
  @Input() sock_name: string;
  @Input() newSock: Sock;

  constructor(private formBuilder: FormBuilder,
              private apiService: ApiService) {

  }

  updateStatus: String = '';

  form = new FormGroup({
    sock_name: new FormControl(),
    sock_size: new FormControl(),
    sock_color: new FormControl(),
    sock_price: new FormControl(),
    sock_amount_stocked: new FormControl(),
    sock_url: new FormControl()
  });

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.form = this.formBuilder.group({
      sock_name: [this.newSock.sock_name, [Validators.maxLength(10), Validators.pattern('[a-zA-Z]*')]],
      sock_size: [this.newSock.sock_size, [Validators.maxLength(5), Validators.pattern('[a-zA-Z]*')]],
      sock_color: [this.newSock.sock_color, [Validators.maxLength(10), Validators.pattern('[a-zA-Z ]*')]],
      sock_price: [this.newSock.sock_price, [Validators.required, Validators.pattern('^[1-9]\\d*$')]],
      sock_amount_stocked: this.newSock.sock_amount_stocked,
      sock_url: this.newSock.sock_url // TODO Validate URL format and/or add way of uploading images directly.
    });
  }

  onSubmit() {
    const sock: Sock = this.form.value;

    this.apiService.updateSock(this.sock_name, sock).
    subscribe(
      res => this.updateStatus = 'success',
      // TODO Implement proper error handling. User still has to guess what is wrong.
      error =>  this.updateStatus = 'error'
    );
  }
}
