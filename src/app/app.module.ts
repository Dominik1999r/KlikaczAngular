import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Click1Component } from './click1/click1.component';
import { Click2Component } from './click2/click2.component';

@NgModule({
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  declarations: [AppComponent, Click1Component, Click2Component],
})
export class AppModule {}
