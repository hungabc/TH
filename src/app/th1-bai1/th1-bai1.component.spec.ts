import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Th1Bai1Component } from './th1-bai1.component';

describe('Th1Bai1Component', () => {
  let component: Th1Bai1Component;
  let fixture: ComponentFixture<Th1Bai1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Th1Bai1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Th1Bai1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
