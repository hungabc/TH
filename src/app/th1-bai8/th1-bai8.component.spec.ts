import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Th1Bai8Component } from './th1-bai8.component';

describe('Th1Bai8Component', () => {
  let component: Th1Bai8Component;
  let fixture: ComponentFixture<Th1Bai8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Th1Bai8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Th1Bai8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
