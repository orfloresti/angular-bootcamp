import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { capitalizeUtil } from './capitalize.util';

@Directive({
  selector: '[capitalize]',
})
export class CapitalizeDirective implements OnInit {
  @Input() capitalize?: string;

  constructor(private element:ElementRef) {}

  ngOnInit() {
    const capitalizedText = capitalizeUtil(this.capitalize);
    this.element.nativeElement.innerText = capitalizedText;
  }
}
