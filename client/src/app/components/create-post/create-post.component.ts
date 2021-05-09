import { Component, OnInit } from '@angular/core';
import { newPost } from '../../models/newPost';
import { CreatePostService } from '../../services/create-post.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  games: any = [];
  sesion: any={
    idUsuario:0,
    Username: "",
    Tipo: 0
  }

  post: newPost = {
    Usuario_idUsuario: 0,
    Juego_idJuego: 0,
    Comentario: ''
  }

  resp:any={
    mensaje:""
  };

  constructor(private createPostService: CreatePostService, private router: Router) { }

  ngOnInit(): void {
    this.createPostService.getGames().subscribe(
      res => {
        this.games = res;
      },
      err => console.error(err)
    )

    this.createPostService.getSesion().subscribe(
      res => {
        this.sesion = res;
        console.log(this.sesion)
        this.post.Usuario_idUsuario=this.sesion.idUsuario;
      },
      err => console.error(err)

    )

}

saveNewPost()
{
  console.log(this.post);
  this.createPostService.createPost(this.post).subscribe(
    res =>{
      console.log(res);
      this.resp=res;
        if(this.resp.mensaje =="publicado"){
          this.router.navigate(['/publicaciones'])
        }
    },
    err => console.error(err)
  )
}

};


