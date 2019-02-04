import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../../models/User';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class AuthenticationService {
  constructor(private httpClient: HttpClient) {}

  public authenticate(email: String, password: String): Observable<User> {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization',
      'Basic ' + btoa(email + ':' + password));
    return this.httpClient.get<User>('https://493b8245.ngrok.io/api/auth/login', {headers: headers});
  }

  public hasRole(){}

}
