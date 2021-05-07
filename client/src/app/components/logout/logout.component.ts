import { Component, OnInit } from '@angular/core';
import {LogoutService} from '../../services/logout.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private logoutService:LogoutService,private router: Router, private activatedRoute: ActivatedRoute) { }
  resp:any={
    mensaje:""
  };
  ngOnInit(): void {
    this.logoutService.cerrarSesion().subscribe(
      res => 
        {this.resp=res;
        if(this.resp.mensaje=='sesion cerrada'){
          this.router.navigate(['/login']);}
        }
      ,
      err => console.error(err)

    )
  }

}
