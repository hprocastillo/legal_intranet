import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "@angular/fire/auth";

@Component({
  selector: 'app-messages-new',
  templateUrl: './messages-new.component.html',
  styleUrls: ['./messages-new.component.scss']
})
export class MessagesNewComponent {
  @Output() outTemplate = new EventEmitter<string>();
  @Input() firebaseUser = {} as User;

  getTemplate(template: string) {
    this.outTemplate.emit(template);
  }
}
