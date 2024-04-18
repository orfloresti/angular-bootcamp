import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { Homework3Component } from './components/homework3/homework3.component';
import { CapitalizeDirective } from './directives/capitalize.directive';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, Homework3Component, CapitalizeDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
