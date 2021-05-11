import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ViewPostService {
  API_URI='http://localhost:3000';
  constructor(private http: HttpClient) { }

  getPost(id:string){
    return this.http.get(`${this.API_URI}/posts/${id}`);
    
  }

}
