import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentsRoutingModule } from './appointments-routing.module';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { AppointmentsListComponent } from './components/appointments-list/appointments-list.component';
import { AppointmentsListItemComponent } from './components/appointments-list-item/appointments-list-item.component';
import { AppointmentsNewComponent } from './components/appointments-new/appointments-new.component';
import { AppointmentsEditComponent } from './components/appointments-edit/appointments-edit.component';
import { AppointmentsViewComponent } from './components/appointments-view/appointments-view.component';


@NgModule({
  declarations: [
    AppointmentsComponent,
    AppointmentsListComponent,
    AppointmentsListItemComponent,
    AppointmentsNewComponent,
    AppointmentsEditComponent,
    AppointmentsViewComponent
  ],
  imports: [
    CommonModule,
    AppointmentsRoutingModule
  ]
})
export class AppointmentsModule { }
