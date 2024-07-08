import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../models/product-interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products: Product[] = [];

  constructor(private product: ProductService) {
    this.product.getProductList(0, 5).subscribe(results => this.products = results);
  }
}
