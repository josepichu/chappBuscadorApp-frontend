// modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// components
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { MenuComponent } from './components/layout/menu/menu.component';
import { SpinnerComponent } from './components/layout/spinner/spinner.component';

// servicios y guards
import { AuthService } from './services/auth/auth.service';
import { httpService } from './services/http/http.service'
import { AuthGuard } from './services/auth/auth.guard';
import { LayoutService } from './services/layout.service';


// páginas
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    httpService,
    AuthGuard,
    LayoutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
