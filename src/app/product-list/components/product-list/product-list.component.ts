import { Component } from '@angular/core';
import { productList } from './product-list-mock';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products = productList;
  
}
