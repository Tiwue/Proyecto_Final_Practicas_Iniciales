import { Component, OnInit } from '@angular/core';
import {JuegosService} from '../../services/juegos.service'; 
import{Busqueda} from '../../models/busqueda';


@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {
  vjuegos:any=[];
  vjuegos2:any=[];
  nombrejuego:Busqueda={
    Nombre:"",
  };

  constructor(private JuegosService: JuegosService) { }

  ngOnInit(): void {
    this.JuegosService.getJuegos().subscribe(
      res=> {
      
        this.vjuegos=res;

      },
      err=>console.error(err)
    );
    
   
  }
  abrir(id:string){
    console.log(id)

  }
  buscar(){
    this.JuegosService.buscarJuego(this.nombrejuego)
    .subscribe(
      res=>{
        this.vjuegos2=res;
      },
      err=>console.error(err)
    )
  }
  limpiar(){
    this.vjuegos2=[];
  }

}
