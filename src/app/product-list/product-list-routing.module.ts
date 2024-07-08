import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SearchInputComponent } from './components/product-list/search-input/search-input.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { PriceTagComponent } from './components/price-tag/price-tag.component';
import { RoundPipe } from '../pipes/round.pipe';
import { OfferPipe } from '../pipes/offer.pipe';
import { NewProductComponent } from './components/new-product/new-product.component';
import { ReactiveFormsModule } from '@angular/forms';

const productListRouting: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: '',
        redirectTo: 'page/1',
        pathMatch: 'full'
      },
      {
        path: 'page/:page',
        component: ProductListComponent
      },
      {
        path: 'details/:id',
        component: ProductDetailsComponent
      },
      {
        path: 'new-product',
        component: NewProductComponent
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
    PaginatorComponent,
    PriceTagComponent,
    NewProductComponent,
    RoundPipe,
    OfferPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(productListRouting)
  ]
})
export class ProductListRoutingModule { }
