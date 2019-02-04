import {Injectable} from '@angular/core';
import {AppComponent} from '../app.component';
import {User} from '../../models/User';
import {Subject} from 'rxjs';

@Injectable()
export class UserService {
  public isLoggedIn = false;
  public isAdmin = false;

  public loggedInEvent: Subject<boolean> = new Subject();

  constructor() {
    this.restoreLogIn();
    this.loggedInEvent.subscribe((value => {
      this.isLoggedIn = value;
    }));
  }

  restoreLogIn() {
    this.setAdminStatus();
    if (this.getAuthorizationString() !== 'default@sock.nl:default') {
      this.setIsLoggedIn();
      this.loggedInEvent.next(true);
    } else {
      this.setIsNotLoggedIn();
      this.loggedInEvent.next(false);
    }
  }

  setIsLoggedIn() {
    this.loggedInEvent.next(true);
    this.isLoggedIn = true;
  }

  setIsNotLoggedIn() {
    this.loggedInEvent.next(false);
    this.isLoggedIn = false;
  }


  setAuthorizationString(user_email: string, user_password: string) {
    const authString = user_email + ':' + user_password;
    localStorage.setItem('authstring', JSON.stringify(authString));
  }

  getAuthorizationString() {
    if (localStorage.getItem('authstring') != null) {
      return JSON.parse(localStorage.getItem('authstring'));
    } else {
      return 'default@sock.nl:default';
    }
  }

  clearAuthorizationString() {
    localStorage.removeItem('authstring');
  }

  setActiveUser(user: User) {
    localStorage.setItem('activeuser', JSON.stringify(user));
  }

  clearActiveUser() {
    localStorage.removeItem('activeuser');
  }

  handleLogIn(user: User, password: string) {
    this.setIsLoggedIn();
    this.setActiveUser(user);
    this.setAuthorizationString(user.user_email, password);
    this.setAdminStatus();
  }

  handleLogOut() {
    this.setIsNotLoggedIn();
    this.clearActiveUser();
    this.clearAuthorizationString();
  }

  setAdminStatus() {
    // TODO This was written at 3 AM - Probably want to do this in a different way.
    if (JSON.parse(localStorage.getItem('activeuser')) !== null) {
      const user: User = JSON.parse(localStorage.getItem('activeuser'));
      if (user.user_roles != null && user.user_roles.includes('ADMIN')) {
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
      }
    } else {
      this.isAdmin = false;
    }
  }

  // Admin Only
  removeUser() {
  }

  addUser() {

  }

}
