import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Key } from 'src/app/arithmetic/key';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.scss']
})
export class KeyComponent {

  @Input()
  key: Key;

  @Output()
  hit: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  /**
   * event raised when a button has been pressed
   */
  clicked($event: any): void {
    this.hit.next(this.key);
  }
}
