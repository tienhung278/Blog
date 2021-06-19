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

  getPostTitles(): Observable<Title[]> {
    return this.client.get<Title[]>(this.baseURL + 'titles');
  }

  getPost(id: number): Observable<Post> {
    return this.client.get<Post>(this.baseURL + id);
  }

  addPost(post: Post): Observable<Post> {
    return this.client.post<Post>(this.baseURL, post, );
  }

  updatePost(post: Post): Observable<string> {
    return this.client.put<string>(this.baseURL, post);
  }

  deletePost(id: number): Observable<string> {
    return this.client.delete<string>(this.baseURL + id);
  }
}
