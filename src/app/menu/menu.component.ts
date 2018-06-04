import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    trigger('drawerState', [
      state('closed', style({'left': '-300px'})),
      state('open', style({'left': '0px'})),
      transition('open => closed', animate('100ms ease-in')),
      transition('closed => open', animate('100ms ease-out'))
    ])
  ]
})
export class MenuComponent implements OnInit {
  public drawer_state = 'closed';
  constructor() { }

  ngOnInit() {
  }

  openMenu($event) {
    this.drawer_state = this.drawer_state === 'open' ? 'closed' : 'open';
    console.log('hit button');

  }
}
