import {
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-fab-menu-item',
  templateUrl: './fab-menu-item.component.html',
  styleUrls: ['./fab-menu-item.component.css'],
  animations: [
    trigger('labelState', [
      state('out', style({
        transform: 'scale(1, 1)',
        'transform-origin': '100% 0%'
      })),
      state('in', style({
        transform: 'scale(0,1)',
        'transform-origin': '100% 0%'
      })),
      transition('out => in', animate('100ms ease-in')),
      transition('in => out', animate('100ms ease-out'))
    ])
  ]
})

export class FabMenuItemComponent implements OnInit {
  @Input() public label_state = 'out';
  @Input() public title = '';
  @Output() Collapsed = new EventEmitter();
  labelCollapsed = false;
  constructor() { }

  ngOnInit() {
  }

  labelFinishedAnimating($event) {
    this.Collapsed.emit();
    this.labelCollapsed = this.label_state === 'in' ? true : false;
  }
}
