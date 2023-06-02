import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllChatComponent } from './all-chat.component';

describe('AllChatComponent', () => {
  let component: AllChatComponent;
  let fixture: ComponentFixture<AllChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllChatComponent]
    });
    fixture = TestBed.createComponent(AllChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
