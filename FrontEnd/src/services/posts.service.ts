import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }
  getPosts(){
    return this.http.get('http://localhost:3000/latestposts')
  }
  getFollowers(){
    return this.http.get('http://localhost:3000/followers')
  }
  getPostLikes(){
    return this.http.get('http://localhost:3000/postlikes')
  }




}
