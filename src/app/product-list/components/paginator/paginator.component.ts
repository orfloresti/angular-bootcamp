import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss'
})
export class PaginatorComponent {

  @Input() itemsPerPage: number = 0;
  @Input() currentPage: number = 0;

  buttons: string[] = [];
  pages: number = 0;

  private _results: number = 0;
  @Input()
  get results() {
    return this._results;
  }
  set results(value: number) {
    this.pages = Math.ceil(value / this.itemsPerPage);
    this.buttons = [];
    for (let i = 1; i <= this.pages; i++) {
      this.buttons.push(`${i}`);
    }
    this._results = value;
  }
  
  constructor(private router: Router) { }

  onClickButton(page: string) {
    this.router.navigate(["/product-list", "page", Number(page)]);
  }

  onNextPage() {
    if (Number(this.currentPage) < this.pages) {
      this.router.navigate(["/product-list", "page", Number(this.currentPage) + 1]);
    }
  }

  onForwardPage() {
    if (Number(this.currentPage) > 1) {
      this.router.navigate(["/product-list", "page", Number(this.currentPage) - 1]);
    }
  }
}
