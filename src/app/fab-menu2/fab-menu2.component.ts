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
    trigger('itemShownState', [
      state('shown', style({
        display: 'block'
      })),
      state('hidden', style({
        display: 'none'
      })),
      transition('shown => hidden', animate('100ms ease-in')),
      transition('hidden => shown', animate('100ms ease-out'))
    ])
  ]
})
export class FabMenu2Component implements OnInit {
  public label_state = 'in';
  public fab_item_state = 'hidden';
  public menu_button_state = 'straight';
  @Output() onMenuButtonPressed: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openMenu() {
    //this.menu_button_state = this.menu_button_state === 'rotated' ? 'straight' : 'rotated';
    //this.fab_item_state = this.fab_item_state === 'hidden' ? 'shown' : 'hidden';
    this.onMenuButtonPressed.emit("menuButtonPressed");
  }
  showLabels() {
    console.log('label state' + this.label_state );
    this.label_state =  this.label_state === 'out' ? 'in' : 'out';
  }
  NavigateTo(destination: string) {
    this.router.navigate([destination]);
  }
}
