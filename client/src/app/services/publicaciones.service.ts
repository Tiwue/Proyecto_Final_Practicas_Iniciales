import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Publicacion } from '../models/publicacion'
@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  API_URI='http://localhost:3000';
  constructor(private http: HttpClient) { }

  getPublicaciones(){
      return this.http.get(`${this.API_URI}/posts`);
  }
  getSesion(){
    return this.http.get(`${this.API_URI}/getSesion`);

  }
}
