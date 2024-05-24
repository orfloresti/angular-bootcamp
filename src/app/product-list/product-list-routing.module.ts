import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';

const productListRouting: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: '',
        component: ProductListComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    ContainerComponent,
    ProductListComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(productListRouting)
  ]
})
export class ProductListRoutingModule { }
