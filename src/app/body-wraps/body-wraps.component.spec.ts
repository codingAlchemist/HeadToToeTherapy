import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyWrapsComponent } from './body-wraps.component';

describe('BodyWrapsComponent', () => {
  let component: BodyWrapsComponent;
  let fixture: ComponentFixture<BodyWrapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyWrapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyWrapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
