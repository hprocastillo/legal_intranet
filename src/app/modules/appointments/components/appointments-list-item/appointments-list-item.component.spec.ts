import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsListItemComponent } from './appointments-list-item.component';

describe('AppointmentsListItemComponent', () => {
  let component: AppointmentsListItemComponent;
  let fixture: ComponentFixture<AppointmentsListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppointmentsListItemComponent]
    });
    fixture = TestBed.createComponent(AppointmentsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
