import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { MyModule } from './my-module/my-module.module';
import { RootInjectableInAppModuleComponent } from './root-injectable-in-app-module/root-injectable-in-app-module.component';

@NgModule({
  imports: [
    BrowserModule,
    MyModule,
  ],
  declarations: [
    AppComponent,
    RootInjectableInAppModuleComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
