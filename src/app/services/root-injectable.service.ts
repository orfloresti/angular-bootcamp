import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RootInjectableService {
  public persistentData: String = "I'm a variable inside a singleton";
}
