import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorModalComponent } from './components/error-modal/error-modal.component';
import { SuccessModalComponent } from './components/success-modal/success-modal.component';
import { DatepickerDirective } from './directives/datepicker.directive';

@NgModule({
  declarations: [
    ErrorModalComponent,
    SuccessModalComponent,
    DatepickerDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorModalComponent,
    SuccessModalComponent,
    DatepickerDirective
  ]
})
export class SharedModule { }
