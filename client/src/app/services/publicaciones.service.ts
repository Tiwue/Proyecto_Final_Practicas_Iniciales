import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Publicacion } from '../models/publicacion'
import{Busqueda} from '../models/busqueda'
@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  API_URI='http://localhost:3000';
  constructor(private http: HttpClient) { }

  getPublicaciones(){
      return this.http.get(`${this.API_URI}/posts`);
  }

  getPublicacion(nombrejuego:Busqueda){
    return this.http.post(`${this.API_URI}/posts`,nombrejuego);
  }


  getSesion(){
    return this.http.get(`${this.API_URI}/getSesion`);

  }
}
