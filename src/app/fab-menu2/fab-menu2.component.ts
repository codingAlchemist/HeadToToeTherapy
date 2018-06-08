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
import {Router} from '@angular/router';
@Component({
  selector: 'app-fab-menu2',
  templateUrl: './fab-menu2.component.html',
  styleUrls: ['./fab-menu2.component.css'],
  animations: [
    trigger('labelState', [
      state('out', style({
        transform: 'scale(0, 1)',
        'transform-origin': '0% 100%'
      })),
      state('in', style({
        transform: 'scale(1,1)',
        'transform-origin': '0% 100%'
      })),
      transition('out => in', animate('150ms ease-in')),
      transition('in => out', animate('150ms ease-out'))
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
      transition('rotated => straight', animate('200ms ease-in')),
      transition('straight => rotated', animate('200ms ease-out'))
    ]),
    trigger('itemOneState', [
      state('up', style({
        transform: 'translateY(-100%)'
      })),
      state('down', style ({
        transform: 'translateY(0%)'
      })),
      transition('down => up', animate('175ms ease-in')),
      transition('up => down', animate('175ms ease-out'))
    ]),
    trigger('itemTwoState', [
      state('up', style({
        transform: 'translateY(-200%)'
      })),
      state('down', style ({
        transform: 'translateY(0%)'
      })),
      transition('down => up', animate('300ms ease-in')),
      transition('up => down', animate('300ms ease-out'))
    ]),
    trigger('itemThreeState', [
      state('up', style({
        transform: 'translateY(-300%)'
      })),
      state('down', style ({
        transform: 'translateY(0%)'
      })),
      transition('down => up', animate('300ms ease-in')),
      transition('up => down', animate('300ms ease-out'))
    ])
  ]
})
export class FabMenu2Component implements OnInit {
  public label_state = 'in';
  public fab_item_state = 'up';
  public menu_button_state = 'straight';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  openMenu() {
    this.menu_button_state = this.menu_button_state === 'rotated' ? 'straight' : 'rotated';
    this.fab_item_state = this.fab_item_state === 'up' ? 'down' : 'up';

  }
  showLabels() {
    console.log('label state' + this.label_state );
    this.label_state =  this.label_state === 'out' ? 'in' : 'out';
  }
  NavigateTo(destination: string) {
    this.router.navigate([destination]);
  }
}
