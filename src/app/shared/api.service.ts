import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {User} from '../../models/User';
import {Observable} from 'rxjs';
import {Sock} from '../../models/Sock';
import {AuthenticationService} from './authentication.service';
import {UserService} from './user.service';

@Injectable()
export class ApiService {
  constructor(private httpClient: HttpClient,
              private userService: UserService) {

  }

  private url = 'https://493b8245.ngrok.io/api/';

  public getAllSocks() {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization',
      'Basic ' + btoa('default@sock.nl:password'));
    return this.httpClient.get<Sock>(this.url + 'socks/',
      {headers: headers});
  }


  public updateSock(sock_name: String, sock: Sock) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization',
      'Basic ' + btoa(this.userService.getAuthorizationString()));

    return this.httpClient.put<Sock>(this.url  + 'socks/' + sock_name, sock,
      {headers: headers});
  }

  public deleteSock(sock: Sock) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization',
      'Basic ' + btoa(this.userService.getAuthorizationString()));

    return this.httpClient.delete<Sock>(this.url + 'socks/' + sock.sock_name,
      {headers: headers});
  }

  public addSock(sock: Sock) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization',
      'Basic ' + btoa(this.userService.getAuthorizationString()));

    return this.httpClient.post<Sock>(this.url + 'socks/', sock,
      {headers: headers});
  }

  public addUser(user: User) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization',
      'Basic ' + btoa(this.userService.getAuthorizationString()));

    return this.httpClient.post<User>(this.url + 'users', user,
      {headers: headers});
  }

  public getAllUsers() {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization',
      'Basic ' + btoa(this.userService.getAuthorizationString()));

    return this.httpClient.get<User>(this.url + 'users',
      {headers: headers});
  }

  public deleteUser(user: User) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization',
      'Basic ' + btoa(this.userService.getAuthorizationString()));

    return this.httpClient.delete<User>(this.url + 'users/' + user.user_email,
      {headers: headers});
  }

  updateUser(user_email: string, user: User) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization',
      'Basic ' + btoa(this.userService.getAuthorizationString()));

    return this.httpClient.put<User>(this.url + 'users/' + user_email, user,
      {headers: headers});
  }
}
