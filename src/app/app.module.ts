import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { MyFirstModule } from './my-first-module/my-first-module.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    MyFirstModule,
    RouterModule.forRoot([]),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}