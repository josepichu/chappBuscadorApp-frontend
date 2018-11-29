import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user:any = null;

  constructor(private httpClient: HttpClient, private router: Router) { }

  login( username: String, password: String){    
    let login =  this.httpClient.post(`${environment.loginCheck}`, {
      client_id: environment.appIds.appId,
      username,
      password
    });    
    return login;
  }

  signUp( _username: String, _password: String){    
    let login =  this.httpClient.post(`${environment.signUp}`, {
      client_id: environment.appIds.appId,
      _username,
      _password
    });    
    return login;
  }

  check() {
    return this.httpClient.get(`${environment.apiURL}/token-is-live`);
  }

  logout(){
    localStorage.clear();
    this.router.navigate(["/login"]);
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('current_user'));
  }

  getCurrentUserName() {
    let userInfo = this.getCurrentUser()
    return userInfo.username
  }  

  isAuthenticated() {
    return this.getCurrentUser() !== null
  }

}
