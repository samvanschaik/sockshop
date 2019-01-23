import { Component, OnInit } from '@angular/core';
import {ApiService} from '../shared/api.service';
import {Sock} from '../../models/Sock';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-sock-management',
  templateUrl: './sock-management.component.html',
  styleUrls: ['./sock-management.component.scss']
})
export class SockManagementComponent implements OnInit {
  public socks: Sock[] = [];
  public loaded = false;
  public activeSock: Sock = null;

  constructor(private apiService: ApiService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.apiService.getAllSocks().
    subscribe(
      response => {this.prepareWindow(response); },
      error => {console.log('Socks couldn\'t be loaded from database.');
      });
  }

  prepareWindow(response) {
    this.socks = response;
    this.loaded = true;
  }

  selectSock(sock: Sock) {
    this.activeSock = sock;
  }

  deleteSock(sock: Sock) {
    this.apiService.deleteSock(sock).subscribe(
      res => console.log('successfully deleted'),
      error => console.log('error deleting sock.')
    );
    this.socks.splice(this.socks.indexOf(sock), 1);
  }

  modifySock(oldSock: Sock) {
  }



}
