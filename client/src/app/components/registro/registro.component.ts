import { Component, OnInit } from '@angular/core';
import {RegistroService} from '../../services/registro.service'; 
import {Registro} from '../../models/registro';
import {} from '../../models/respuesta';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registro:Registro={
    
    Nombre: '',
    Username: '',
    Correo: '',
    Contrasenia: '',
    Biografia: '',
    Fecha: '',
    Tipo: 0
    
  };

  resp:any={
    acceso:false,
    mensaje:""
  };
  constructor(private registroService:RegistroService,private router: Router, private activatedRoute: ActivatedRoute) { 


  }

  ngOnInit(): void {
  }
  registrarUsuario(){
    this.registroService.registrarUsuario(this.registro)
    .subscribe(
      res=>{
        console.log(res);
        this.resp=res;
        if(this.resp.mensaje =="Usuario registrado"){
          this.router.navigate(['/'])
        }
      },
      err=> console.error(err)
    )
  }
}
