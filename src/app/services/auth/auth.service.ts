import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  login( email: String, password: String){    
    let login =  this.httpClient.post(`${environment.apiURL}/login`, {
      client_id: environment.appIds.portalProveedor,
      email,
      password
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

}
