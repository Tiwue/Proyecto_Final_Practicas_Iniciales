import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ IndexComponent} from './components/index/index.component'
import {LoginComponent} from './components/login/login.component'
import { RegistroComponent } from './components/registro/registro.component';
import { PublicacionesComponent } from './components/publicaciones/publicaciones.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import {LogoutComponent} from './components/logout/logout.component';
import {AdmonComponent} from './components/admon/admon.component';
import {CreatePostComponent} from './components/create-post/create-post.component';
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
  path:'admon',
  component: AdmonComponent
},{
  path:'newPost',
  component: CreatePostComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
