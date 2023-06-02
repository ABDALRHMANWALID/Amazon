import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapAddressComponent } from './map-address.component';

describe('MapAddressComponent', () => {
  let component: MapAddressComponent;
  let fixture: ComponentFixture<MapAddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapAddressComponent]
    });
    fixture = TestBed.createComponent(MapAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
