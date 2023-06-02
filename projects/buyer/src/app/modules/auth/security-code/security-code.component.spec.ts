import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityCodeComponent } from './security-code.component';

describe('SecurityCodeComponent', () => {
  let component: SecurityCodeComponent;
  let fixture: ComponentFixture<SecurityCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecurityCodeComponent]
    });
    fixture = TestBed.createComponent(SecurityCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
