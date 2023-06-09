import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleChatComponent } from './single-chat.component';

describe('SingleChatComponent', () => {
  let component: SingleChatComponent;
  let fixture: ComponentFixture<SingleChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleChatComponent]
    });
    fixture = TestBed.createComponent(SingleChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
