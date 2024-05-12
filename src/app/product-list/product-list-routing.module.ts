import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';

const productListRouting: Routes = [
  {
    path: '',
    component: ContainerComponent
  }
]

@NgModule({
  declarations: [
    ContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(productListRouting)
  ]
})
export class ProductListRoutingModule { }
