import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'offer',
})
export class OfferPipe implements PipeTransform {

  transform(value: number, discount: number): string {
    const price = value * ((100 - discount)/100);

    const trunc = Math.trunc(price);
    const decimal = price - trunc;

    let result: string = '';
    
    if( decimal < 0.5 ) {
      result = `$${trunc + 0.5}0`;
    } 
    if( decimal >= 0.5) {
      result = `$${trunc + 1}.00`;
    }

    return result;
  }

}
