import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDealsComponent } from './event-deals.component';

describe('EventDealsComponent', () => {
  let component: EventDealsComponent;
  let fixture: ComponentFixture<EventDealsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventDealsComponent]
    });
    fixture = TestBed.createComponent(EventDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
