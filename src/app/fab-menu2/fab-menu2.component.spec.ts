import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabMenu2Component } from './fab-menu2.component';

describe('FabMenu2Component', () => {
  let component: FabMenu2Component;
  let fixture: ComponentFixture<FabMenu2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabMenu2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabMenu2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
