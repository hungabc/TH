import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhapabComponent } from './nhapab.component';

describe('NhapabComponent', () => {
  let component: NhapabComponent;
  let fixture: ComponentFixture<NhapabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhapabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhapabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
