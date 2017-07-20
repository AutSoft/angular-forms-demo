import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModelDrivenFormModule } from './model-driven-form/model-driven-form.module';
import { TemplateDrivenFormModule } from './template-driven-form/template-driven-form.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ModelDrivenFormModule,
    TemplateDrivenFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
