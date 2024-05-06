import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {

  capitalize(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  reduceValue = (accumulatedValue: string, currentValue: string): string => !!accumulatedValue
    ? `${accumulatedValue} ${this.capitalize(currentValue)}`
    : this.capitalize(currentValue);

  transform(value: string): string {
    const splittedValue: string[] = value.split(" ");
    return splittedValue.reduce(this.reduceValue, '');
  }
}
