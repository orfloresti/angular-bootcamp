import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Z1Component } from './components/z1/z1.component';
import { Z2Component } from './components/z2/z2.component';
import { Z3Component } from './components/z3/z3.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Z1Component,
    Z2Component,
    Z3Component
  ],
  exports: [
    Z1Component,
    Z2Component,
    Z3Component
  ],
})
export class ZModule { }
