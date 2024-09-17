import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { Homework1Component } from './components/homework1/homework1.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, Homework1Component],
  bootstrap: [AppComponent],
})
export class AppModule {}
