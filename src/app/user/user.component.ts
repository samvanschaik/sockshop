import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
import {UserService} from '../shared/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public user: User = null;
  public  loaded = false;
  private isAdmin = false;

  constructor(private userServioe: UserService,
              private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('activeuser') == null) {
      this.router.navigate(['/login']);
    } else {
      this.user = JSON.parse(localStorage.getItem('activeuser'));
      this.loaded = true;
      this.userServioe.isLoggedIn = true;
      if (this.user.user_roles.includes('ADMIN')) {
        this.isAdmin = true;
      }
    }
  }

  onLogOut() {
    this.userServioe.handleLogOut();
  }
}
