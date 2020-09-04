import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Th1Bai2Component } from './th1-bai2.component';

describe('Th1Bai2Component', () => {
  let component: Th1Bai2Component;
  let fixture: ComponentFixture<Th1Bai2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Th1Bai2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Th1Bai2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
