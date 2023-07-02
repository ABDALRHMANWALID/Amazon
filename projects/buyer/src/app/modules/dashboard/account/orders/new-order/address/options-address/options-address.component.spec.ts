import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsAddressComponent } from './options-address.component';

describe('OptionsAddressComponent', () => {
  let component: OptionsAddressComponent;
  let fixture: ComponentFixture<OptionsAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionsAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionsAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
