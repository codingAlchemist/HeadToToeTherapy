import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacialsComponent } from './facials.component';

describe('FacialsComponent', () => {
  let component: FacialsComponent;
  let fixture: ComponentFixture<FacialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
