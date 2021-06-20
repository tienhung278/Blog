import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
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
    return this.client.get<Title[]>(this.baseURL + 'titles')
    .pipe(catchError(this.errorHandler));
  }

  getPost(id: number): Observable<Post> {
    return this.client.get<Post>(this.baseURL + id)
    .pipe(catchError(this.errorHandler));
  }

  addPost(post: Post): Observable<Post> {
    return this.client.post<Post>(this.baseURL, post, )
    .pipe(catchError(this.errorHandler));
  }

  updatePost(post: Post, id?: number): Observable<string> {
    return this.client.put<string>(this.baseURL + id, post)
    .pipe(catchError(this.errorHandler));
  }

  deletePost(id: number): Observable<string> {
    return this.client.delete<string>(this.baseURL + id)
    .pipe(catchError(this.errorHandler));
  }

  private errorHandler(error: HttpErrorResponse) {
    return throwError(error);    
  }
}
