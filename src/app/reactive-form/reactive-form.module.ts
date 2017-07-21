import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormComponent } from './reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomFormsModule
  ],
  declarations: [ReactiveFormComponent],
  exports: [ReactiveFormComponent]
})
export class ReactiveFormModule { }
