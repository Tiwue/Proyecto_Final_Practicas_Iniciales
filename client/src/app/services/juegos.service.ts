import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Juego } from '../models/juego'
import{Busqueda} from '../models/busqueda'

@Injectable({
  providedIn: 'root'
})
export class JuegosService {
  API_URI='http://localhost:3000';

constructor(private http: HttpClient) { }
getJuegos(){
  return this.http.get(`${this.API_URI}/juegos`);
}
buscarJuego(nombrejuego:Busqueda){
  return this.http.post(`${this.API_URI}/juegos`,nombrejuego);
}

getJuego(id:string){
  return this.http.get(`${this.API_URI}/juego1/buscar/${id}`);
  
}

}
