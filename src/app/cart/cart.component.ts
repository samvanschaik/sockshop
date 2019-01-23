import { Component, OnInit } from '@angular/core';
import {Sock} from '../../models/Sock';
import {CartService} from '../shared/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public socks: Sock[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.socks = this.cartService.getCart();

    this.cartService.sockSubject.subscribe(
      response => {this.socks = this.cartService.getCart(); },
        error => {console.log('Error loading socks in cart.'); }
      );
  }

  removeFromCart(id: number) {
    this.cartService.removeFromCart(id);
    this.socks.splice(id, 1);
    this.socks = this.cartService.getCart();
  }

  emptyCart() {
    this.cartService.emptyCart();
    this.socks = [];
  }

  getPriceTotal() {
    let pricetotal = 0;

    if (this.socks.length !== 0) {
      this.socks.forEach(function (sock) {
        pricetotal += sock.sock_price;
      });
    }

    return (pricetotal / 10);
  }



}

