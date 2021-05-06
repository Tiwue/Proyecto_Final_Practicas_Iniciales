import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service'; 
import {Login} from '../../models/login';
import { Router, ActivatedRoute } from '@angular/router';
import { Respuesta } from 'src/app/models/respuesta';

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
   
  resp:any={
    acceso:false,
    mensaje:""
  };

  constructor(private loginService:LoginService,private router: Router, private activatedRoute: ActivatedRoute) {
   }

  ngOnInit(): void {
  }

  iniciarSesion(){
    this.loginService.validarUsuario(this.login)
    .subscribe(
      res=>{
        console.log(res);
        this.resp=res;
        if(this.resp.mensaje =="Bienvenido"){
          this.router.navigate(['/publicaciones'])
        }
      },
      err=> console.error(err)
    )
  }
}
