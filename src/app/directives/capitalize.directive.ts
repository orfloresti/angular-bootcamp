import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[capitalize]',
})
export class CapitalizeDirective {
  constructor(private element:ElementRef) {
    this.element.nativeElement.style.textTransform = "capitalize";
  }
}
