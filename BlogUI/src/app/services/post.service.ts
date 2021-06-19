import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../entities/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  readonly baseURL = 'http://localhost:5000/api/posts/';

  constructor(private client: HttpClient) { 
    
  }

  getPostTitles(): Observable<HttpResponse<Post[]>> {
    return this.client.get<HttpResponse<Post[]>>(this.baseURL + 'titles');
  }

  getPost(id: number): Observable<HttpResponse<Post>> {
    return this.client.get<HttpResponse<Post>>(this.baseURL + id);
  }

  addPost(post: Post): Observable<HttpResponse<Post>> {
    return this.client.post<HttpResponse<Post>>(this.baseURL, post, );
  }

  updatePost(post: Post): Observable<HttpResponse<string>> {
    return this.client.put<HttpResponse<string>>(this.baseURL, post);
  }

  deletePost(id: number): Observable<HttpResponse<string>> {
    return this.client.delete<HttpResponse<string>>(this.baseURL + id);
  }
}
