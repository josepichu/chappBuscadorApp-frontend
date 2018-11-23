import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.sass']
})
export class RegistroComponent implements OnInit {

  private username: String;
  private password: String;
  private loading: boolean;
  private sub: any;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {
    this.username = "";
    this.password = "";
    this.loading = false;
  }
  ngOnInit() {
  }

  doSignUp() {
    this.loading = true;
    this.authService.signUp(this.username, this.password).subscribe(
      (response: any) => {
        this.loading = false;

        console.log(response);

        if (response.success) {

          this.router.navigate(['home']);

        } else console.error(response.msg);     

      },
      (response: any) => {
        this.loading = false;
      }
    );
  }

}
