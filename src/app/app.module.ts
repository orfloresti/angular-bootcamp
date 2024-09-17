import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { Homework7Component } from './components/homework7/homework7.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent,Homework7Component, CapitalizePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
