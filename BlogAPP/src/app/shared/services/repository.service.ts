import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  readonly envUrl: string = environment.urlAddress;

  constructor(private http: HttpClient) { }

  get(route: string): Observable<any> {
    return this.http.get<any>(this.createCompletedRoute(route));
  }

  create(route: string, body: any): Observable<any> {
    return this.http.post<any>(this.createCompletedRoute(route), body);
  }

  update(route: string, body: any): Observable<any> {
    return this.http.put<any>(this.createCompletedRoute(route), body);
  }

  delete(route: string): Observable<any> {
    return this.http.delete<any>(this.createCompletedRoute(route));
  }

  private createCompletedRoute(route: string): string {
    return `${this.envUrl}/${route}`;
  }
}
