import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { capitalizeUtil } from './capitalize.util';

@Directive({
  selector: '[capitalize]',
})
export class CapitalizeDirective implements OnInit {

  constructor(private element:ElementRef) {}

  ngOnInit() {
    const nativeElement = this.element.nativeElement;
    const capitalizedText = capitalizeUtil(nativeElement.innerText);
    nativeElement.innerText = capitalizedText;
  }
}
