import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss'
})
export class PaginatorComponent implements OnInit {
  @Input() results: number = 0;
  @Input() itemsPerPage: number = 0;
  @Input() currentPage: number = 0;
  
  buttons: string[] = [];
  pages: number = 0;

  constructor(private router: Router){}

  ngOnInit(): void {
    this.pages = Math.floor(this.results / this.itemsPerPage);
    for( let i = 0; i < this.pages; i++) {
      this.buttons.push(`${i+1}`);
    }
  }

  onClickButton(page: string) {
    this.router.navigate(["/product-list", "page", Number(page) - 1]);
  }

  onNextPage() {
    if( Number(this.currentPage) + 1 < this.pages) {
      this.router.navigate(["/product-list", "page", Number(this.currentPage) + 1]);
    }
  }
  
  onForwardPage() {
    if( Number(this.currentPage) + 1 > 1) {
      this.router.navigate(["/product-list", "page", Number(this.currentPage) - 1]);
    }
  }
}
