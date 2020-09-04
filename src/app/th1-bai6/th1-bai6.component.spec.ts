import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Th1Bai6Component } from './th1-bai6.component';

describe('Th1Bai6Component', () => {
  let component: Th1Bai6Component;
  let fixture: ComponentFixture<Th1Bai6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Th1Bai6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Th1Bai6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
