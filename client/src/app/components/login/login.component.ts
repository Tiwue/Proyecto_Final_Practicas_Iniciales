import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service'; 
import {Login} from '../../models/login';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
   
  login:Login={
    usuario: '',
    contrasenia: '',
  };

  constructor(private loginService:LoginService) {
   }

  ngOnInit(): void {
  }

  iniciarSesion(){
    this.loginService.validarUsuario(this.login)
    .subscribe(
      res=>{console.log(res)},
      err=> console.error(err)
    )
  }
}
