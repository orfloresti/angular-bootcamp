import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  id: string = '';

  constructor( private route: ActivatedRoute, private product: ProductService) {

    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.product.getProduct(this.id).subscribe( details => console.log(details) );
    });
  }

}
