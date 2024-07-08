import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SearchInputComponent } from './components/product-list/search-input/search-input.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const productListRouting: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: '',
        redirectTo: 'page/0',
        pathMatch: 'full'
      },
      {
        path: 'page/:page',
        component: ProductListComponent
      },
      {
        path: 'details/:id',
        component: ProductDetailsComponent
      }
    ]
  },
]

@NgModule({
  declarations: [
    ContainerComponent,
    ProductListComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    SearchInputComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(productListRouting)
  ]
})
export class ProductListRoutingModule { }
