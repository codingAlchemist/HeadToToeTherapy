import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-fab-menu2',
  templateUrl: './fab-menu2.component.html',
  styleUrls: ['./fab-menu2.component.css'],
  animations: [
    trigger('labelState', [
      state('out', style({
        transform: 'scale(1, 1)',
        'transform-origin': '0% 100%'
      })),
      state('in', style({
        transform: 'scale(0,1)',
        'transform-origin': '0% 100%'
      })),
      transition('out => in', animate('100ms ease-in')),
      transition('in => out', animate('100ms ease-out'))
    ]),
    trigger('buttonRotationState', [
      state('rotated', style({
        transform: 'rotate(-45deg)',
        'transform-origin': '50% 50%'
      })),
      state('straight', style({
        transform: 'rotate(0deg)',
        'transform-origin': '50% 50%'
      })),
      transition('rotated => straight', animate('100ms ease-in')),
      transition('straight => rotated', animate('100ms ease-out'))
    ]),
    trigger('fabItemState', [
      state('down', style({
        position: 'absolute',
        top: '-32px'
      })),
      state('up', style ({
        position: 'relative'
      })),
      transition('down => up', animate('100ms ease-in')),
      transition('up => down', animate('100ms ease-out'))
    ])
  ]
})
export class FabMenu2Component implements OnInit {
  public label_state = 'in';
  public fab_item_state = 'down';
  public menu_button_state = 'straight';
  constructor() { }

  ngOnInit() {
  }

  openMenu() {
    this.label_state = this.label_state === 'out' ? 'in' : 'out';
    this.fab_item_state = this.fab_item_state === 'up' ? 'down' : 'up';
    this.menu_button_state = this.menu_button_state === 'rotated' ? 'straight' : 'rotated';
    console.log('expanding');
  }
}
