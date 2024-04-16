import { Component } from '@angular/core';

@Component({
  selector: 'app-hm1',
  templateUrl: './hm1.component.html',
  styleUrl: './hm1.component.scss'
})
export class Hm1Component {

  active = false;

  handleClick() {
    this.active = !this.active
  }
}
