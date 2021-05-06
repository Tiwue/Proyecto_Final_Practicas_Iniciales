import { Component, OnInit } from '@angular/core';
import {forgetService} from '../../services/forg-pass.service'; 
import {Forget, Cambio} from '../../models/forget';

import { Router, ActivatedRoute } from '@angular/router';
import { Respuesta } from 'src/app/models/respuesta';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forget:Forget={
    Username: '',
    Correo: '',
  };
   
  resp:any={
    acceso:false,
    mensaje:""
  };

  cambio:Cambio={
    Username:"",
    Contrasenia:""
  }
  constructor(private forgetService:forgetService,private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

  }

  validar(){
    this.forgetService.validarUsuario(this.forget)
    .subscribe(
      res=>{
        console.log(res);
        this.resp=res;
      },
      err=> console.error(err)
    )
  }

  cambiar(){
    this.forgetService.cambiarContraseña(this.cambio)
    .subscribe(
      res=>{
        console.log(res);
        this.resp=res;
      },
      err=> console.error(err)
    ) 
  }
}
