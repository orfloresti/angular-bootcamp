import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../models/product-interface';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products: Product[] = [];
  total: number = 0;
  products$: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private product: ProductService
  ) {
    this.products$.add(this.route.params.pipe(
      switchMap( params => {
        const page = params['page'];
        return this.product.getProductList( Number(page), 5);
      })
    ).subscribe( products => {
      this.products = products.data;
      this.total = products.total;
    }));    
  }

  ngOnDestroy() {
    this.products$.unsubscribe();
  }

}
