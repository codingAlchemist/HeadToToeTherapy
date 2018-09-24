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
  public submenu4;
  public hidden_state = {display: 'none'}
  public shown_state = {display: 'block', 'padding-left':'10px'}
  constructor() { }

  ngOnInit() {
  }

  openMenu($event) {
    this.drawer_state = this.drawer_state === 'open' ? 'closed' : 'open';
  }

  showSubmenu(menuShown: number){
    if (menuShown == 4){
        this.submenu4 = 1
    }else{
      this.submenu4 = 0
    }
  }

  onSubmenuClick(menuShown){
    if (menuShown === 4){
      this.submenu4 = this.submenu4 === 0 ? 1 : 0
    }
  }
}
