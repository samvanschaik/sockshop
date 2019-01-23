import {AppComponent} from '../app.component';
import {Injectable, OnInit} from '@angular/core';
import {Sock} from '../../models/Sock';
import {Subject} from 'rxjs';

@Injectable()
export class CartService {
  public socks: Sock[] = [];
  sockSubject = new Subject();

  constructor() {
  }

  getCart(): Sock[] {
    return JSON.parse(localStorage.getItem('cart'));
  }

  addTocart(sock: Sock) {
    this.socks.push(sock);
    localStorage.setItem('cart', JSON.stringify(this.socks));
    this.sockSubject.next(sock);
    console.log('Added ' + sock.sock_name + ' to local storage.');
  }

  emptyCart() {
    localStorage.removeItem('cart');
    this.sockSubject.next('Cart emptied.');
    console.log('Removed all items from local storage.');
  }

  removeFromCart(id: Number) {
    const temp = JSON.parse(localStorage.getItem('cart'));
    temp.splice(id, 1);
    localStorage.removeItem('cart');
    localStorage.setItem('cart', JSON.stringify(temp));
    this.sockSubject.next('Removed an item.')
    console.log('Removed item ' + id + ' from local storage.');
  }
}
