import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ModuleLazyModule } from './module-lazy/module-lazy.module';

@NgModule({
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    ModuleLazyModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}