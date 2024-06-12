import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss'
})
export class SearchInputComponent {
  @Output() onFilter = new EventEmitter<string>();

  handleChange(value: Event) {
    const input = value.target as HTMLInputElement;
    debugger;
    this.onFilter.emit(input.value);
  }
}
