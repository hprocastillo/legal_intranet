import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Message} from "../../../../shared/interfaces/message";

@Component({
  selector: 'app-messages-view',
  templateUrl: './messages-view.component.html',
  styleUrls: ['./messages-view.component.scss']
})
export class MessagesViewComponent {
  @Input() message = {} as Message;
  @Output() outTemplate = new EventEmitter<string>();

  getTemplate(template: string) {
    this.outTemplate.emit(template);
  }


}
