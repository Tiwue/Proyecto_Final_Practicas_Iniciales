import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ IndexComponent} from './components/index/index.component'
import {LoginComponent} from './components/login/login.component'
import {JuegosComponent} from './components/juegos/juegos.component'
import{Juego1Component} from './components/juego1/juego1.component'
import{Juego2Component} from './components/juego1/juego2.component'
import { RegistroComponent } from './components/registro/registro.component';
import { PublicacionesComponent } from './components/publicaciones/publicaciones.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import {LogoutComponent} from './components/logout/logout.component';
const routes: Routes = [{
  path:'',
  redirectTo: '/index',
  pathMatch:'full'
},
{
  path:'index',
  component: IndexComponent
},
{
  path:'login',
  component: LoginComponent
},{
  path:'registro',
  component: RegistroComponent
},
{
  path:'publicaciones',
  component: PublicacionesComponent
},{
  path:'forgPass',
  component: ForgotPasswordComponent
},{
  path:'logout',
  component: LogoutComponent
},{
  path:'juegos',
  component: JuegosComponent
},{
  path:'juego1/buscar2/:id',
  component: Juego2Component
},{
  path:'juego1/buscar/:id',
  component: Juego1Component
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
