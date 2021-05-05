import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Registro} from  '../models/registro';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  API_URI='http://localhost:3000';
  constructor(private http: HttpClient) { }

  registrarUsuario(registro: Registro){
    return this.http.post(`${this.API_URI}/registro`,registro);
}
}
