import { Component, OnDestroy } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../models/product-interface';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnDestroy {
  service$: Subscription = new Subscription();
  products: Product[] = [];
  total: number = 0;
  currentPage: number = 0;

  constructor(
    private route: ActivatedRoute,
    private product: ProductService,
    private router: Router
  ) {
    this.service$.add(this.route.params.pipe(
      switchMap( params => {
        this.currentPage = params['page'];
        return this.product.getProductList( Number(this.currentPage), 5);
      })
    ).subscribe( products => {
      this.products = products.data;
      this.total = products.total;
    }));    
  }

  handleFilter(text: string) {
    this.router.navigate(["/product-list", "page", 1]);
    this.service$.add(
      this.product.filterProducts( text, 1, 5  ).subscribe(
        response => {
          this.products = response.data;
          this.total = response.total;
        }
      )
    )
  }

  ngOnDestroy() {
    this.service$.unsubscribe();
  }

}
