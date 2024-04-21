import { Component } from '@angular/core';
import { ModuleProviderInjectable } from '../../services/module-provider-injectable.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.scss'
})
export class MyComponent{
  constructor(readonly moduleProviderInjectable: ModuleProviderInjectable){ }
}
