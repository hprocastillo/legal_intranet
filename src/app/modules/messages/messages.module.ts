import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesComponent } from './components/messages/messages.component';
import { MessagesListComponent } from './components/messages-list/messages-list.component';
import { MessagesListItemComponent } from './components/messages-list-item/messages-list-item.component';
import { MessagesNewComponent } from './components/messages-new/messages-new.component';
import { MessagesEditComponent } from './components/messages-edit/messages-edit.component';
import { MessagesViewComponent } from './components/messages-view/messages-view.component';


@NgModule({
  declarations: [
    MessagesComponent,
    MessagesListComponent,
    MessagesListItemComponent,
    MessagesNewComponent,
    MessagesEditComponent,
    MessagesViewComponent
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule
  ]
})
export class MessagesModule { }
