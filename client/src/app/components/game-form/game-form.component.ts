import { Component, OnInit, HostBinding } from '@angular/core';
import { Game } from 'src/app/models/Game';

import { GamesService } from 'src/app/services/games.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {


  game: any = {
    idJuego:0,
    Nombre: "",
    descripcion: "",
    cartucho: "",
    Fecha: "",
    Consola_idConsola: 0

  };

  resp:any={
    acceso:false,
    mensaje:""
  };

  edit: boolean = false;

  constructor(private gameService: GamesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.gameService.getGame(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.game = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }
  
  saveNewGame() {
    this.gameService.saveGame(this.game)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/admon']);
        },
        err => console.error(err)
      )
  }

  updateGame() {
    this.gameService.updateGame(this.game.idJuego, this.game)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/admon']);
        },
        err => console.error(err)
      )
  }

}
