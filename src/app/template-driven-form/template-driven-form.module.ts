import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenFormComponent } from './template-driven-form.component';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomFormsModule
  ],
  declarations: [TemplateDrivenFormComponent],
  exports: [TemplateDrivenFormComponent]
})
export class TemplateDrivenFormModule { }
