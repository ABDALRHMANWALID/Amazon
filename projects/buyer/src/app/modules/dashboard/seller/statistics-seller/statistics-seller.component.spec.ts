import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsSellerComponent } from './statistics-seller.component';

describe('StatisticsSellerComponent', () => {
  let component: StatisticsSellerComponent;
  let fixture: ComponentFixture<StatisticsSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticsSellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatisticsSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
