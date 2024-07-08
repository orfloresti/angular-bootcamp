import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { productList } from './product-list-mock';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProduct(id: string) {
    const product = productList.find( product => product.id === id );
    return of(product);
  }

  getProductList(offset: number, results: number) {
    const list = productList.slice(offset * results, (offset * results) + results);
    return of({
      data: list,
      total: productList.length,
    });
  }
}
