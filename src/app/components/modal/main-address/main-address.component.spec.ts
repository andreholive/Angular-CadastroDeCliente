import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAddressComponent } from './main-address.component';

describe('MainAddressComponent', () => {
  let component: MainAddressComponent;
  let fixture: ComponentFixture<MainAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
