import { Component, OnInit } from '@angular/core';
import {AdmonService } from '../../services/admon.service';

@Component({
  selector: 'app-admon',
  templateUrl: './admon.component.html',
  styleUrls: ['./admon.component.css']
})
export class AdmonComponent implements OnInit {
  usuarios:any=[]
  games:any=[]

  divJuegos:boolean=false;
  divUsuarios:boolean=true;

  constructor(private admonService:AdmonService) { }

  ngOnInit(): void {
    this.admonService.getUsuarios().subscribe(
      res => {
        this.usuarios = res;
      },
      err => console.error(err)
    )

    this.admonService.getGames().subscribe(
      res => {
        this.games = res;
      },
      err => console.error(err)
    )
  }

  mostrarUsuarios(){
    this.divJuegos=false;
    this.divUsuarios=true;
  }

  mostrarJuegos(){
    this.divJuegos=true;
    this.divUsuarios=false;
  }

  getGames() {
    this.admonService.getGames()
      .subscribe(
        res => {
          this.games = res;
        },
        err => console.error(err)
      );
  }

  deleteGame(id: string) {
    this.admonService.deleteGame(id)
      .subscribe(
        res => {
          console.log(res);
          this.getGames();
        },
        err => console.error(err)
      )
  }

}
