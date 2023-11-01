import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Message} from "../../../../shared/interfaces/message";
import {MessagesService} from "../../../../shared/services/messages.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss']
})
export class MessagesListComponent implements OnInit, OnDestroy {
  @Output() outTemplate = new EventEmitter<string>();
  @Output() messageToView = new EventEmitter<Message>();

  today = new Date();
  listMessages: Message[] = [];
  private unsubscribe$ = new Subject<boolean>();

  constructor(private messagesService: MessagesService) {
  }

  ngOnInit(): void {
    this.messagesService.getMessages()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(res => {
        this.listMessages = res;
      });
  }

  getMessage(message: Message) {
    this.messageToView.emit(message);
  }

  getTemplate(template: string) {
    this.outTemplate.emit(template);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
