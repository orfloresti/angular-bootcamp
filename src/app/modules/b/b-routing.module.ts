import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { B1Component } from './components/b1/b1.component';
import { B2Component } from './components/b2/b2.component';
import { B3Component } from './components/b3/b3.component';
import { ZModule } from '../z/z.module';

const bRoutes: Routes = [
  {
    path: 'b1',
    component: B1Component,
  },
  {
    path: 'b2',
    component: B2Component,
  },
  {
    path: 'b3',
    component: B3Component,
  }
]

@NgModule({
  declarations: [
    B1Component,
    B2Component,
    B3Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(bRoutes),
    ZModule
  ],
  exports: [
    RouterModule,
  ]
})
export class BRoutingModule { }
