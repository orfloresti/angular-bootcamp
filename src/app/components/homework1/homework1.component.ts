import { Component } from '@angular/core';

@Component({
  selector: 'app-homework1',
  templateUrl: './homework1.component.html',
  styleUrl: './homework1.component.scss'
})
export class Homework1Component {

  active = false;

  handleClick() {
    this.active = !this.active
  }
}
