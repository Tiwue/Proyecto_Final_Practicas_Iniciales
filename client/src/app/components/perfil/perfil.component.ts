import { Component, OnInit } from '@angular/core';
import {PerfilService}from '../../services/perfil.service'
import {ActivatedRoute}from '@angular/router'

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  perfil: any={
    idUsuario: 0,
    Nombre: '',
    Username: '',
    Correo: '',
    Contrasenia: '',
    Biografia: '',
    Fecha: '',
    Tipo: ''
  }

  constructor(private perfilService: PerfilService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const params=this.activatedRoute.snapshot.params;
    this.perfilService.getPerfil(params.id).subscribe(
      res => {
        this.perfil = res;
        console.log(this.perfil);
      },
      err => console.error(err)
    )
  }

}
