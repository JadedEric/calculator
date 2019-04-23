import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Key } from 'src/app/arithmetic/key';

@Component({
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
   * 
   */
  clicked($event: any): void {
    this.hit.next(this.key);
  }
}
