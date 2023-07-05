import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSellerComponent } from './info-seller.component';

describe('InfoSellerComponent', () => {
  let component: InfoSellerComponent;
  let fixture: ComponentFixture<InfoSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
