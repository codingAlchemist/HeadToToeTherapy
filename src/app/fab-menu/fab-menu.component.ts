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
  selector: 'app-fab-menu',
  templateUrl: './fab-menu.component.html',
  styleUrls: ['./fab-menu.component.css'],
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
    trigger('fabItem1State', [
      state('up', style({ 'bottom': '120px'})),
      state('down', style({ 'bottom': '47px'})),
      transition('down => up', animate('100ms ease-in')),
      transition('up => down', animate('100ms ease-out'))
    ]),
    trigger('fabItem2State', [
      state('up', style({ 'bottom': '170px'})),
      state('down', style({ 'bottom': '47px'})),
      transition('down => up', animate('100ms ease-in')),
      transition('up => down', animate('100ms ease-out'))
    ]),
    trigger('fabItem3State', [
      state('up', style({ 'bottom': '220px'})),
      state('down', style({ 'bottom': '47px'})),
      transition('down => up', animate('100ms ease-in')),
      transition('up => down', animate('100ms ease-out'))
    ]),
    trigger('fabItem4State', [
      state('up', style({ 'bottom': '270px'})),
      state('down', style({ 'bottom': '47px'})),
      transition('down => up', animate('100ms ease-in')),
      transition('up => down', animate('100ms ease-out'))
    ]),
    trigger('fabItem5State', [
      state('up', style({ 'bottom': '320px'})),
      state('down', style({ 'bottom': '47px'})),
      transition('down => up', animate('100ms ease-in')),
      transition('up => down', animate('100ms ease-out'))
    ])
  ]
})

export class FabMenuComponent implements OnInit {
  public label_state = 'in';
  public fab_item_state = 'up';
  public menu_button_state = 'straight';
  @Input() buttonOneTitle  = '';
  @Input() buttonTwoTitle  = '';
  @Input() buttonThreeTitle  = '';
  @Input() buttonFourTitle  = '';
  @Input() buttonFiveTitle  = '';

  @Output() clickedButton1: EventEmitter<number> = new EventEmitter();
  @Output() clickedButton2: EventEmitter<number> = new EventEmitter();
  @Output() clickedButton3: EventEmitter<number> = new EventEmitter();
  @Output() clickedButton4: EventEmitter<number> = new EventEmitter();
  @Output() clickedButton5: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  openMenu() {
    this.label_state = this.label_state === 'out' ? 'in' : 'out';
    this.menu_button_state = this.menu_button_state === 'rotated' ? 'straight' : 'rotated';
    console.log('expanding');
  }
  collapseItem($event) {
    this.fab_item_state = this.fab_item_state === 'up' ? 'down' : 'up';
    console.log('collapse');
  }

  button1Clicked() {
    this.clickedButton1.emit(1);
  }
  button2Clicked() {
    this.clickedButton2.emit(2);
  }
  button3Clicked() {
    this.clickedButton3.emit(3);
  }
  button4Clicked() {
    this.clickedButton4.emit(4);
  }
  button5Clicked() {
    this.clickedButton5.emit(5);
  }
}
