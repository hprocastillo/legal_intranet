import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesViewComponent } from './messages-view.component';

describe('MessagesViewComponent', () => {
  let component: MessagesViewComponent;
  let fixture: ComponentFixture<MessagesViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessagesViewComponent]
    });
    fixture = TestBed.createComponent(MessagesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
