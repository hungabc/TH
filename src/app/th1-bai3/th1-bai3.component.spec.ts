import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Th1Bai3Component } from './th1-bai3.component';

describe('Th1Bai3Component', () => {
  let component: Th1Bai3Component;
  let fixture: ComponentFixture<Th1Bai3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Th1Bai3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Th1Bai3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
