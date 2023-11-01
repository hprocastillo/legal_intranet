import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './components/customers/customers.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { CustomersListItemComponent } from './components/customers-list-item/customers-list-item.component';
import { CustomersNewComponent } from './components/customers-new/customers-new.component';
import { CustomersEditComponent } from './components/customers-edit/customers-edit.component';
import { CustomersViewComponent } from './components/customers-view/customers-view.component';


@NgModule({
  declarations: [
    CustomersComponent,
    CustomersListComponent,
    CustomersListItemComponent,
    CustomersNewComponent,
    CustomersEditComponent,
    CustomersViewComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
