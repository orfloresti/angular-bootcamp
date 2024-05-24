import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product-interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  @Input() details?: Product;
  
  get title() {
    console.log(new Date())
    return this.details?.title || '';
  }

  get price() {
    return this.details?.prices || {};
  }

  get description() {
    return this.details?.description || '';
  } 

  ngOnInit() {
  }
}
