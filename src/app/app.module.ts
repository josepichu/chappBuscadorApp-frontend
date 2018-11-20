// modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';
import { MenuComponent } from './components/layout/menu/menu.component';

// components
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';

// servicios y guards
import { AuthService } from './services/auth/auth.service';
import { AuthHttp } from './services/http/http.service'
import { AuthGuard } from './services/auth/auth.guard';

// páginas
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/layout/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AuthService,
    AuthHttp,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
