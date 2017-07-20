import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenFormComponent } from './template-driven-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TemplateDrivenFormComponent],
  exports: [TemplateDrivenFormComponent]
})
export class TemplateDrivenFormModule { }
