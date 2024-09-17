import { Component } from '@angular/core';
import { RootInjectableService } from '../../services/root-injectable.service';

@Component({
  selector: 'app-root-injectable-in-my-module',
  templateUrl: './root-injectable-in-my-module.component.html',
  styleUrl: './root-injectable-in-my-module.component.scss'
})
export class RootInjectableInMyModuleComponent {
  persistentData = this.rootInjectableService.persistentData;
  constructor(readonly rootInjectableService: RootInjectableService){}
}
