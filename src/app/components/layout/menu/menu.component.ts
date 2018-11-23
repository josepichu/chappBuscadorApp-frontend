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
  private router:Router;

  constructor(authService:AuthService, router:Router) {
    this.authService = authService;
    this.router = router;
   }

   logout() {
     this.authService.logout();
     this.router.navigate(['/home']);
   }

}
