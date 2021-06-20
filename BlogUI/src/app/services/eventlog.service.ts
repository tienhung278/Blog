import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Eventlog } from '../entities/eventlog';

@Injectable({
  providedIn: 'root'
})
export class EventlogService {
  readonly baseURL = 'http://localhost:5000/api/eventlogs/';

  constructor(private client: HttpClient) { }

  getEventLogs(pageNumber?: number): Observable<HttpResponse<Eventlog[]>> {    
    if (pageNumber != undefined) {
      return this.client.get<Eventlog[]>(this.baseURL, 
      { 
        observe: "response",
        params: { "pageNumber": pageNumber } 
      })
    }
    return this.client.get<Eventlog[]>(this.baseURL, { observe: "response" })
  }
}
