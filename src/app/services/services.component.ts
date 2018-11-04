import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  panelOpenState = false;
  constructor() { }

  ngOnInit() {
  }

}
