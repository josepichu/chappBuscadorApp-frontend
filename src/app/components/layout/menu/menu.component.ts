import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent  {

  public authService:AuthService;

  constructor(authService:AuthService, router:Router) {
    this.authService = authService;
   }



}
