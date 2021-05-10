import { Component, OnInit } from '@angular/core';
import {JuegosService} from '../../services/juegos.service'; 
import{ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-juego1',
  templateUrl: './juego1.component.html',
  styleUrls: ['./juego1.component.css']
})
export class Juego2Component implements OnInit {
  vjuegos:any=[];
  vjuegos2:any=[];
  busqueda:any={
    nombre:""
 
  }
  
  constructor(private JuegosService: JuegosService, private router:Router,private activedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  const params=this.activedRoute.snapshot.params;
  console.log(params)
  var x =  params.id;
  var y: number = +x;
    this.JuegosService.getJuegos().subscribe(
      res=> {
          this.vjuegos=res;
          for (var val of this.vjuegos) {
            if(y==val.idJuego){
            this.vjuegos2=val;
            console.log(val)
           }
           
            
          }
  

      },
      err=>console.error(err)
    );
    
    
  }
  realizar_busqueda(id:string){
   
  }
  
  

}
