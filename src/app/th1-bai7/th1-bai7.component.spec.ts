import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Th1Bai7Component } from './th1-bai7.component';

describe('Th1Bai7Component', () => {
  let component: Th1Bai7Component;
  let fixture: ComponentFixture<Th1Bai7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Th1Bai7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Th1Bai7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
