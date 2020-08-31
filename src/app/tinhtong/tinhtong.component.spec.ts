import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinhtongComponent } from './tinhtong.component';

describe('TinhtongComponent', () => {
  let component: TinhtongComponent;
  let fixture: ComponentFixture<TinhtongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinhtongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinhtongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
