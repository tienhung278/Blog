import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Eventlog } from 'src/app/entities/eventlog';
import { PageInfo } from 'src/app/entities/pageInfo';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { EventlogService } from 'src/app/services/eventlog.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  eventLogs: Eventlog[] | null;
  errorMsg: string;

  constructor(private services: EventlogService, private router: Router) {
    this.eventLogs = null;
    this.errorMsg = "";
   }

  ngOnInit(): void {
    this.getEventLogs();
  }

  getEventLogs(): void {    
    this.services.getEventLogs().subscribe(
      data => {
        this.eventLogs = data.body;
      },
      error => this.errorMsg = error.statusText     
    )
  }

  getList(): void {
    this.router.navigateByUrl("/");
  }
}
