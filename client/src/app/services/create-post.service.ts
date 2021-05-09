import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { newPost } from '../models/newPost'

@Injectable({
  providedIn: 'root'
})
export class CreatePostService {

  API_URI='http://localhost:3000';
  constructor(private http: HttpClient) { }
  getGames(){
    return this.http.get(`${this.API_URI}/getGames`);
  }
  getSesion(){
    return this.http.get(`${this.API_URI}/getSesion`);

  }
  createPost(nPost : newPost){
    return this.http.post(`${this.API_URI}/createNewPost`, nPost);

  }
}
