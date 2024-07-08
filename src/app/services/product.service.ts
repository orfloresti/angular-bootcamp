import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { productList } from './product-list-mock';
import { Product } from '../product-list/components/models/product-interface';

interface ProductForm {
  title: string,
  description: string,
  photos: string[],
  prices: {
    key: string,
    value: number,
  }[],
  offerDiscount: number,
}


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = productList;

  getProduct(id: string): Observable<Product> {
    const product = productList.find(product => product.id === id);
    
    if( product ) {
      return of(product);
    }
    else{
      return new Observable( subs => subs.error('Not found') );
    }
    
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

  getOfferts(offset: number, itemsPerPage: number) {
    this.products = productList.filter( product => product.offerDiscount );
    const pageList = this.products.slice((offset - 1) * itemsPerPage, ((offset - 1) * itemsPerPage) + itemsPerPage);

    return of({
      data: pageList,
      total: this.products.length,
    })
  }

  saveProduct(product: ProductForm) {
    let prices: { [tag: string]: number } = {};

    product.prices.forEach(element => {
      prices[element.key] = element.value
    });

    this.products.push({ 
      ...product,
      prices,
      id: `${this.products.length + 1}`,
    })
  }
}

