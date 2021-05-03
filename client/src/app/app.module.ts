import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GamesFormComponent } from './components/games-form/games-form.component';
import { LoginComponent } from './components/login/login.component';
import { IndexComponent } from './components/index/index.component';
import { LoginService} from './services/login.service'
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GamesFormComponent,
    LoginComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
