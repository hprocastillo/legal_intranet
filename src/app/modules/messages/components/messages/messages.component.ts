import {Component} from '@angular/core';
import {AuthService} from "../../../../shared/services/auth.service";
import {Message} from "../../../../shared/interfaces/message";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {

  template: string = "LIST";
  messageToView = {} as Message;

  constructor(public authService: AuthService) {
  }

  getTemplate(template: string) {
    this.template = template;
  }

  getMessage(message: Message) {
    this.messageToView = message;
    this.template = "VIEW";
  }


}
