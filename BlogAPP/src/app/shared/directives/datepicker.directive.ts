import { Directive, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appDatepicker]'
})
export class DatepickerDirective implements OnInit {
  @Output() change: EventEmitter<any> = new EventEmitter();

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    $(this.elementRef.nativeElement).datepicker({
      dateFormat: 'dd/mm/yy',
      changeYear: true,
      yearRange: "-100:+0",
      onSelect: (dateText) => {
        this.change.emit(dateText);
      }
    });
  }

}
