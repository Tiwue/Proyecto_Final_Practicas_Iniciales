import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Forget, Cambio} from  '../models/forget';

@Injectable({
  providedIn: 'root'
})
export class forgetService {

  API_URI='http://localhost:3000';
  constructor(private http: HttpClient) { }

  validarUsuario(forget: Forget){
      return this.http.post(`${this.API_URI}/forgPass`,forget);
  }

  cambiarContraseña(cambio:Cambio){
    return this.http.post(`${this.API_URI}/cambio`,cambio);
  }
}