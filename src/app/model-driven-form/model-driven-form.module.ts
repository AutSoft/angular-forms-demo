import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelDrivenFormComponent } from './model-driven-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ModelDrivenFormComponent],
  exports: [ModelDrivenFormComponent]
})
export class ModelDrivenFormModule { }
