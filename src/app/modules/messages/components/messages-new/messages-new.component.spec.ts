import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesNewComponent } from './messages-new.component';

describe('MessagesNewComponent', () => {
  let component: MessagesNewComponent;
  let fixture: ComponentFixture<MessagesNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessagesNewComponent]
    });
    fixture = TestBed.createComponent(MessagesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
