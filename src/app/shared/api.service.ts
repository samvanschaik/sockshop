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

  private url = 'https://07aec57e.ngrok.io/api';

  public getAllSocks<Sock>() {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization',
      'Basic ' + btoa('default@sock.nl:password'));
    return this.httpClient.get<Sock>(this.url + 'api/socks/',
      {headers: headers});
  }


  public updateSock(sock_name: String, sock: Sock) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization',
      'Basic ' + btoa(this.userService.getAuthorizationString()));

    return this.httpClient.put<Sock>('http://localhost:8080/api/socks/' + sock_name, sock,
      {headers: headers});
  }


  public deleteSock(sock: Sock) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization',
      'Basic ' + btoa(this.userService.getAuthorizationString()));

    return this.httpClient.delete<Sock>('http://localhost:8080/api/socks/' + sock.sock_name,
      {headers: headers});
  }

  public addSock(sock: Sock) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization',
      'Basic ' + btoa(this.userService.getAuthorizationString()));

    return this.httpClient.post<Sock>('http://localhost:8080/api/socks/', sock,
      {headers: headers});
  }

  public addUser(user: User) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization',
      'Basic ' + btoa(this.userService.getAuthorizationString()));

    return this.httpClient.post<Sock>('http://localhost:8080/api/users/', user,
      {headers: headers});
  }

  public getAllUsers<User>() {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization',
      'Basic ' + btoa(this.userService.getAuthorizationString()));

    return this.httpClient.get<User>('http://localhost:8080/api/users/',
      {headers: headers});
  }

  public deleteUser(user: User) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization',
      'Basic ' + btoa(this.userService.getAuthorizationString()));

    return this.httpClient.delete<Sock>('http://localhost:8080/api/users/' + user.user_email,
      {headers: headers});
  }

  updateUser(user_email: string, user: User) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization',
      'Basic ' + btoa(this.userService.getAuthorizationString()));

    return this.httpClient.put<Sock>('http://localhost:8080/api/users/' + user_email, user,
      {headers: headers});
  }
}
