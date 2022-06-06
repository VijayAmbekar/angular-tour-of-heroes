import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message-service/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // public - because you want to bind this to template
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
