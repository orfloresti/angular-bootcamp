import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { Homework2Component } from './components/homework2/homework2.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, Homework2Component],
  bootstrap: [AppComponent],
})
export class AppModule {}
