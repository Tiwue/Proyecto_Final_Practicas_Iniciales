import { Component, OnInit, HostBinding } from '@angular/core';
import { Game } from 'src/app/models/Game';

import { UsersService } from 'src/app/services/users.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: any = {
    idUsuario:0,
    Nombre: "",
    Username:"",
    Correo:"",
    Contrasenia:"",
    Biografia:"",
    Fecha: "",
    tipo:0,

  };

  resp:any={
    acceso:false,
    mensaje:""
  };

  edit: boolean = false;

  constructor(private userService: UsersService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.userService.getUser(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.user = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }
  
  saveNewUser() {
    this.userService.saveUser(this.user)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/admon']);
        },
        err => console.error(err)
      )
  }

  updateUser() {
    this.userService.updateUser(this.user.idUsuario, this.user)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/admon']);
        },
        err => console.error(err)
      )
  }

}

