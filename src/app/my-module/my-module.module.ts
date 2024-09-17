import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponent } from './my-component/my-component.component';
import { ModuleProviderInjectable } from '../services/module-provider-injectable.service';
import { RootInjectableInMyModuleComponent } from './root-injectable-in-my-module/root-injectable-in-my-module.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MyComponent,
    RootInjectableInMyModuleComponent,
  ],
  exports: [
    MyComponent,
    RootInjectableInMyModuleComponent,
  ],
  providers: [ModuleProviderInjectable]
})
export class MyModule { }
