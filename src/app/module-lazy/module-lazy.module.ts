import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLazyComponent } from './component-lazy/component-lazy.component';
import { RouterModule, Routes } from '@angular/router';

const lazyRoutes: Routes = [
  { path: '', component: ComponentLazyComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(lazyRoutes),
  ]
})
export class ModuleLazyModule { }
