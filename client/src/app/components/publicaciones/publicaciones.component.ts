import { Component, OnInit } from '@angular/core';
import { PublicacionesService } from '../../services/publicaciones.service';
@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {
  posts: any = [];
  sesion: any={
    idUsuario:0,
    Username: "",
    Tipo: 0
  }
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
}};
