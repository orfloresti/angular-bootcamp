import { Component } from '@angular/core';

@Component({
  selector: 'app-homework4',
  templateUrl: './homework4.component.html',
  styleUrl: './homework4.component.scss'
})
export class Homework4Component {

  alertMessage: string = "I was triggered by an event";
  oneWayDataBinding: string = "Hello World";
  twoWayDataBinding: string = "Hello World";

  handleClick() {
    window.alert(this.alertMessage);
  }
}
