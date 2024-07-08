import { Component, Input, Output } from '@angular/core';

interface Price { key: string, value: number }

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() id: string = "";
  @Input() title: string = "";
  @Input() description: string = "";
  @Input() offerDiscount?: number;

  private _prices: Price[] = [{ key: "N/A", value: 0}];
  @Input()
  public set prices( values: { [tag: string]: number } ) {
    let prices = [];
    for( let key in values ) {
      prices.push( {
        key,
        value: values[key]
      } )
    }
    this._prices = prices;
  }
  public get prices(): Price[] {
    return this._prices;
  }

  @Input() photos?: string[];
  public get photo() : string {
    if (this.photos && this.photos.length > 0) {
      return this.photos[0];
    }
    return "";
  }
}
