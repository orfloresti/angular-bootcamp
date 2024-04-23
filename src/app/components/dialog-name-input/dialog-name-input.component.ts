import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-dialog-name-input',
  templateUrl: './dialog-name-input.component.html',
  styleUrl: './dialog-name-input.component.scss'
})
export class DialogNameInputComponent {
  input: string = ''
  constructor() { }
}
