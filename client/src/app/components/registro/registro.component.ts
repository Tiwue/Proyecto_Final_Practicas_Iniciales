import { Component, OnInit } from '@angular/core';
import {RegistroService} from '../../services/registro.service'; 
import {Registro} from '../../models/registro';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registro:Registro={
    usuario: '',
    nombres: '',
    apellidos: '',
    fechaNac: '',
    correo: '',
    contrasenia: '',
    biografia: ''
  };
  constructor(private registroService:RegistroService) { 


  }

  ngOnInit(): void {
  }
  registrarUsuario(){
    this.registroService.registrarUsuario(this.registro)
    .subscribe(
      res=>{console.log(res)},
      err=> console.error(err)
    )
  }
}
