import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
import {ApiService} from '../shared/api.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  public users: User[] = [];
  public loaded = false;
  public activeUser: User = null;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllUsers().
    subscribe(
      response => {this.prepareWindow(response); },
      error => {console.log('Users couldn\'t be loaded from database.');
      });
  }

  prepareWindow(response) {
    this.users = response;
    this.loaded = true;
  }

  selectUser(user: User) {
    this.activeUser = user;
  }

  deleteUser(user: User) {
    this.apiService.deleteUser(user).subscribe(
      res => console.log('succesfully deleted'),
      error => console.log('error deleting sock')
    )
    this.users.splice(this.users.indexOf(user), 1);
  }
}
