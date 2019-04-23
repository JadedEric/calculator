import { Component } from '@angular/core';
import { CalculatorBase } from './baseclasses/calculator-base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends CalculatorBase {
  title = 'Calculator';

  constructor() {
    super();    
  }
}
