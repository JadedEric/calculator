import { Component, Input } from '@angular/core';

@Component({
  selector: 'display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent {

  @Input()
  value: string;
}
