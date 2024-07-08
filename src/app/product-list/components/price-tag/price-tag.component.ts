import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-price-tag',
  templateUrl: './price-tag.component.html',
  styleUrl: './price-tag.component.scss'
})
export class PriceTagComponent {
  @Input() name: string = '';
  @Input() price: number = 0;
  @Input() offerDiscount?: number = 0;
  
}
