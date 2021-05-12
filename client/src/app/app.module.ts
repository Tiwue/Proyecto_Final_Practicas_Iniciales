import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import { LoginComponent } from './components/login/login.component';
import { IndexComponent } from './components/index/index.component';
import { LoginService} from './services/login.service';
import { RegistroComponent } from './components/registro/registro.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { PublicacionesComponent } from './components/publicaciones/publicaciones.component';
import { PublicacionesService } from './services/publicaciones.service';
import { LogoutComponent } from './components/logout/logout.component';
import { AdmonComponent } from './components/admon/admon.component';
import { CreatePostComponent } from './components/create-post/create-post.component';

import { UserFormComponent } from './components/user-form/user-form.component';
import { GameFormComponent } from './components/game-form/game-form.component';
import {PerfilComponent}from './components/perfil/perfil.component';
import {PerfilService}from './services/perfil.service'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    IndexComponent,
    RegistroComponent,
    ForgotPasswordComponent,
    PublicacionesComponent,
    LogoutComponent,
    AdmonComponent,
    CreatePostComponent,
    UserFormComponent,
    GameFormComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LoginService, PublicacionesService,PerfilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
