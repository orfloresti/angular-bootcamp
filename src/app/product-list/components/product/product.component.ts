import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
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
