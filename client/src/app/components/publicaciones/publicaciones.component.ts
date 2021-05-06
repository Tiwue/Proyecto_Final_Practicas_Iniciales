import { Component, OnInit } from '@angular/core';
import { PublicacionesService } from '../../services/publicaciones.service';
@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

  constructor(private publicacionesService: PublicacionesService) { }

  ngOnInit(): void {
    this.publicacionesService.getPublicaciones().subscribe(
      res => console.log(res),
      err => console.error(err)
    )
  }

}
