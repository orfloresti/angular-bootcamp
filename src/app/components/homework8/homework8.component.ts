import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogNameInputComponent } from '../dialog-name-input/dialog-name-input.component';

@Component({
  selector: 'app-homework8',
  templateUrl: './homework8.component.html',
  styleUrl: './homework8.component.scss'
})
export class Homework8Component {

  constructor(public dialog: MatDialog) { }

  name: string = ''

  handleOpenDialog(): void {
    const dialogRef = this.dialog.open(DialogNameInputComponent, { data: { name: this.name } });
    dialogRef.afterClosed().subscribe( inputValue => this.name = inputValue ? `Hello ${inputValue}` : '');
  }

}
