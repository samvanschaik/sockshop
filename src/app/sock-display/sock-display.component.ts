import { Component, OnInit } from '@angular/core';
import {Sock} from '../../models/Sock';
import {ApiService} from '../shared/api.service';
import {CartService} from '../shared/cart.service';
import {ToastrService} from 'ngx-toastr';



@Component({
  selector: 'app-sock-display',
  templateUrl: './sock-display.component.html',
  styleUrls: ['./sock-display.component.scss']
})
export class SockDisplayComponent implements OnInit {
  public socks: Sock[] = [];
  public successFooter = false;
  public loaded = false;

  constructor(private apiService: ApiService,
              private cartService: CartService,
              private toasterService: ToastrService
              ) { }

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

  onBuy(sock: Sock) {
    this.cartService.addTocart(sock);
    this.popSuccessFooter(sock);
  }

  // TODO probably clean this up somehow, also doesnt show with header active.
  popSuccessFooter(sock: Sock) {
    this.successFooter = true;
    setTimeout(() => {
      this.successFooter = false;
    }, 500);
  }

}
