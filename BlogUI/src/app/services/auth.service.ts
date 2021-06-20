import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResponse } from '../entities/auth-response';
import { User } from '../entities/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  readonly authURL = 'http://localhost:5000/auth/';

  constructor(private client: HttpClient) { }

  login(user: User): Observable<HttpResponse<AuthResponse>> {
    return this.client.post<AuthResponse>(this.authURL + "login", user, { observe: "response" })
  }
}
