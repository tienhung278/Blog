import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../entities/post';
import { Title } from '../entities/title';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  readonly baseURL = 'http://localhost:5000/api/posts/';

  constructor(private client: HttpClient) { 
    
  }

  getPostTitles(pageNumber?: number): Observable<HttpResponse<Title[]>> {
    if (pageNumber != undefined) {
      return this.client.get<Title[]>(this.baseURL + "titles", 
      { 
        observe: "response",
        params: { "pageNumber": pageNumber } 
      })
    }
    return this.client.get<Title[]>(this.baseURL + "titles", { observe: "response" })
  }

  getPost(id: number): Observable<Post> {
    return this.client.get<Post>(this.baseURL + id)
  }

  addPost(post: Post): Observable<Post> {
    return this.client.post<Post>(this.baseURL, post, )
  }

  updatePost(post: Post, id?: number): Observable<string> {
    return this.client.put<string>(this.baseURL + id, post)
  }

  deletePost(id: number): Observable<string> {
    return this.client.delete<string>(this.baseURL + id)
  }
}
