import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  API_URI='http://localhost:3000';
  constructor(private http: HttpClient) { }
  cerrarSesion(){
    return this.http.get(`${this.API_URI}/logout`);
}
}
