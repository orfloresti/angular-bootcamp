import { Component } from '@angular/core';
import { RootInjectableService } from '../services/root-injectable.service';

@Component({
  selector: 'app-root-injectable-in-app-module',
  templateUrl: './root-injectable-in-app-module.component.html',
  styleUrl: './root-injectable-in-app-module.component.scss'
})
export class RootInjectableInAppModuleComponent {
  persistentData = this.rootInjectableService.persistentData;
  constructor(readonly rootInjectableService: RootInjectableService){}
}
