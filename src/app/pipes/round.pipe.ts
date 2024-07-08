import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'round',
})
export class RoundPipe implements PipeTransform {

  transform(value: number): string {
    const trunc = Math.trunc(value);
    const decimal = value - trunc;

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
