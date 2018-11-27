import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class httpService {

  constructor(private http: HttpClient) { }

  createAuthorizationHeader() {    
    return new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem("access_token"));
  }

  put(url: string, body: any) {        
    return this.http.put(url, body, {
      headers: this.createAuthorizationHeader()
    });
  }
  
  get(url, params?: any) {
    return this.http.get(url, {
      headers: this.createAuthorizationHeader(),
      params
    });
  }

  post(url, data) {    
    return this.http.post(url, data, {
      headers: this.createAuthorizationHeader()
    });
  }

  delete(url, params?: any){
    return this.http.delete(url, {
      headers: this.createAuthorizationHeader(),
      params
    });
  }

  patch(url: string, data: any) {
    return this.http.patch(url, data, {
      headers: this.createAuthorizationHeader(),
    });
  }

}
