import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../shared/api.service';
import {Sock} from '../../models/Sock';

@Component({
  selector: 'app-sock-creation',
  templateUrl: './sock-creation.component.html',
  styleUrls: ['./sock-creation.component.scss']
})
export class SockCreationComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private apiService: ApiService) {
    this.createForm();
  }

  creationStatus: String = '';
  // TODO This still can't create a proper sock model on its own so it just copies one fetched from the database earlier. Should probably fix this.
  @Input() newSock: Sock;
  @Input() existingSocks: Sock[];

  // TODO Unused for now. Use this later to validate if a sock name already exists.
  existingSockNames: string[];

  form = new FormGroup({
    sock_name: new FormControl(),
    sock_size: new FormControl(),
    sock_color: new FormControl(),
    sock_price: new FormControl(),
    sock_amount_stocked: new FormControl(),
    sock_url: new FormControl()
  });

  ngOnInit() {
    for (const sock of this.existingSocks) {
      this.existingSockNames.push(sock.sock_name);
    }
  }

  private createForm() {
    this.form = this.formBuilder.group({
      sock_name: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('[a-zA-Z]*')]],
      sock_size: ['', [Validators.required, Validators.maxLength(5), Validators.pattern('[a-zA-Z]*')]],
      sock_color: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('[a-zA-Z ]*')]],
      sock_price: [null, [Validators.required, Validators.pattern('^[1-9]\\d*$')]],
      sock_amount_stocked: [null, Validators.required],
      sock_url: ['', Validators.required] // TODO Validate URL format and/or add way of uploading images directly.
    });
  }

  onSubmit() {
    this.newSock.sock_name = this. form.getRawValue().sock_name;
    this.newSock.sock_size = this.form.getRawValue().sock_size;
    this.newSock.sock_color = this.form.getRawValue().sock_color;
    this.newSock.sock_price = this.form.getRawValue().sock_price;
    this.newSock.sock_amount_stocked = this.form.getRawValue().sock_amount_stocked;
    this.newSock.sock_url = this.form.getRawValue().sock_url;

    this.apiService.addSock(this.newSock)
      .subscribe(
        // TODO Implement proper server error handling.
    );
  }
}
