import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.css']
})
export class SuccessModalComponent implements OnInit {
  @Input() modalTitle: string = "";  
  @Input() modalBody: string = "";
  @Output() redirectOnOk: EventEmitter<any> = new EventEmitter();  

  constructor() { }

  ngOnInit(): void {
  }

  redirect(): void {
    this.redirectOnOk.emit();
  }
}
