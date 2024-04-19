import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { Homework4Component } from './components/homework4/homework4.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, Homework4Component],
  bootstrap: [AppComponent],
})
export class AppModule {}
