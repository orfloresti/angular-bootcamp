import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { productList } from './product-list-mock';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = productList;

  getProduct(id: string) {
    const product = productList.find(product => product.id === id);
    return of(product);
  }

  getProductList(offset: number, itemsPerPage: number) {
    const list = this.products.slice((offset - 1) * itemsPerPage, ((offset - 1) * itemsPerPage) + itemsPerPage);
    return of({
      data: list,
      total: this.products.length,
    });
  }

  filterProducts(text: string, offset: number, itemsPerPage: number) {
    this.products = productList.filter(product => product.title.toLowerCase().includes(text.toLowerCase()));
    const pageList = this.products.slice((offset - 1) * itemsPerPage, ((offset - 1) * itemsPerPage) + itemsPerPage);

    return of({
      data: pageList,
      total: this.products.length,
    })
  }
}
