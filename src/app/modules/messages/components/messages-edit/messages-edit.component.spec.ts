import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesEditComponent } from './messages-edit.component';

describe('MessagesEditComponent', () => {
  let component: MessagesEditComponent;
  let fixture: ComponentFixture<MessagesEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessagesEditComponent]
    });
    fixture = TestBed.createComponent(MessagesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
