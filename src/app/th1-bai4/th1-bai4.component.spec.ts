import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Th1Bai4Component } from './th1-bai4.component';

describe('Th1Bai4Component', () => {
  let component: Th1Bai4Component;
  let fixture: ComponentFixture<Th1Bai4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Th1Bai4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Th1Bai4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
