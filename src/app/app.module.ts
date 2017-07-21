import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormModule } from './reactive-form/reactive-form.module';
import { TemplateDrivenFormModule } from './template-driven-form/template-driven-form.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormModule,
    TemplateDrivenFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
