import { Component, OnInit} from '@angular/core';
import {CartService} from './shared/cart.service';
import {UserService} from './shared/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.restoreLogIn();
  }
}

