import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { EventEmmiterService } from 'src/app/services/event.emmiter.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent{

  private username: String;
  private password: String;
  private loading: boolean;
  private sub: any;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute, private _eventEmiter: EventEmmiterService) {
    this.username = "";
    this.password = "";
    this.loading = false;
  }

  ngOnInit() {    
    this.sub = this.route.params.subscribe(params => {
      this.authService.logout()
    });
  }  

  ngOnDestroy() {
    
  }

  doLogin() {    
    this.loading = true;
    this.authService.login(this.username, this.password).subscribe(
      (response: any) => {
        localStorage.setItem('current_user', JSON.stringify(response));
        localStorage.setItem('access_token', response["payload"]["token"]);
        this.loading = false;
        this.router.navigate(['home']);
      },
      (response: any) => {
        this.loading = false;

        var msg = response.error && response.error.message ? response.error.message : 'Error Inesperado'

        this._eventEmiter.sendStatusMessage('danger', msg)
      }
    );
  }

}
