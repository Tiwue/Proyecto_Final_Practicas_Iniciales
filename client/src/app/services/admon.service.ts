import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdmonService {

  API_URI='http://localhost:3000';
  constructor(private http: HttpClient) { }

  getUsuarios(){
      return this.http.get(`${this.API_URI}/getUsers`);
  }

  getGames(){
    return this.http.get(`${this.API_URI}/getGames`);
}
 
}