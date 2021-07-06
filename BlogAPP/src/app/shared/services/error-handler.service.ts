import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  errMsg: string = "";

  constructor(private router: Router) { }

  handleError(err: HttpErrorResponse): void {
    switch (err.status) {
      case 404:
        this.createErrorMessage(err.statusText);
        this.router.navigateByUrl("404");        
        break;
      case 500:
        this.createErrorMessage(err.statusText);
        this.router.navigateByUrl("404");
        break;
      default:
        this.createErrorMessage(err.statusText);
        break;
    }
  }

  private createErrorMessage(msg: string) {
    this.errMsg = msg;
  }
}
