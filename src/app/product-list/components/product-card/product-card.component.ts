import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent implements OnInit {
  @Input() id = "";
  @Input() title = "";
  @Input() description = "";
  @Input() prices: { [tag: string]: number } = { "N/A": 0};

  @Input() photos?: string[];
  public get photo() : string {
    if (this.photos && this.photos.length > 0) {
      return this.photos[0];
    }
    return "";
  }

  ngOnInit() {
  }
}
