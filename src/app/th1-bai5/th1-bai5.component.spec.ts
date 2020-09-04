import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Th1Bai5Component } from './th1-bai5.component';

describe('Th1Bai5Component', () => {
  let component: Th1Bai5Component;
  let fixture: ComponentFixture<Th1Bai5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Th1Bai5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Th1Bai5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
