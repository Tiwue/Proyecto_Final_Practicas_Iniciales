import { Component, OnInit } from '@angular/core';
import { ViewPostService  } from '../../services/view-post.service';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  post: any = {
    idPublicacion: 0,
    Fecha: '',
    Comentario: '',
    nombreJuego: '',
    Usuario: '',
    Cartucho: ''
  }


  constructor(private viewPostService : ViewPostService, private router: Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    const params=this.activatedRoute.snapshot.params;
    this.viewPostService.getPost(params.id).subscribe(
      res=> {this.post=res, console.log(res)}, 
      error => console.log(error),
      
    );
  }

}
