import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { Subscription, switchMap } from 'rxjs';
import { Product } from '../models/product-interface';
import { Price } from '../product-card/product-card.component';
import { getPrices } from './product-details.utils';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnDestroy {
  id: string = '';
  service$: Subscription = new Subscription();
  details: Product = {
    id: "",
    title: "",
    prices: { },
    photos: [],
    description: '',
    offerDiscount: undefined,
  }

  prices: Price[] = [{ key: "N/A", value: 0}];

  constructor( private route: ActivatedRoute, private product: ProductService) {
    this.service$.add(this.route.params.pipe(
      switchMap( params => {
        this.id = params['id'];
        return this.product.getProduct( this.id);
      })
    ).subscribe( (result: Product) => {
      this.details = result;
    })); 

    this.prices = getPrices(this.details.prices);
  }

  ngOnDestroy() {
    this.service$.unsubscribe();
  }
}
