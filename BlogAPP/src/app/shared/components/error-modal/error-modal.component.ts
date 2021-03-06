import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.css']
})
export class ErrorModalComponent implements OnInit {
  @Input() modalTitle: string = "";
  @Input() modalBody: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
