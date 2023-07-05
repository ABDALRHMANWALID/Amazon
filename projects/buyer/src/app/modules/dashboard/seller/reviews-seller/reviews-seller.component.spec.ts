import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsSellerComponent } from './reviews-seller.component';

describe('ReviewsSellerComponent', () => {
  let component: ReviewsSellerComponent;
  let fixture: ComponentFixture<ReviewsSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewsSellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewsSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
