import { Component, OnInit } from '@angular/core';
import { PublicacionesService } from '../../services/publicaciones.service';
import{Busqueda} from '../../models/busqueda';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {
  posts: any = [];
  posts2: any = [];

  sesion: any={
    idUsuario:0,
    Username: "",
    Tipo: 0
  }

  nombrejuego:Busqueda={
    Nombre:"",
  };
  constructor(private publicacionesService: PublicacionesService) { }

  ngOnInit(): void {
    this.publicacionesService.getPublicaciones().subscribe(
      res => {
        this.posts = res;
      },
      err => console.error(err)
    )

    this.publicacionesService.getSesion().subscribe(
      res => {
        this.sesion = res;
      },
      err => console.error(err)

    )
}

buscar(){
  this.publicacionesService.getPublicacion(this.nombrejuego)
  .subscribe(
    res=>{
      this.posts2=res;
      console.log(this.posts2)
    },
    err=>console.error(err)
  )
}
limpiar(){
  this.posts2=[];
}

};
