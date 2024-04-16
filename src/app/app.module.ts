import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { Hm1Component } from './components/hm1/hm1.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, Hm1Component],
  bootstrap: [AppComponent],
})
export class AppModule {}