import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() {

  }

  getCssVariableValue(variableName){
    return getComputedStyle(document.documentElement).getPropertyValue(variableName);
  }

}
