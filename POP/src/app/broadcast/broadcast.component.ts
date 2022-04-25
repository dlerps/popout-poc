import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-broadcast',
  templateUrl: './broadcast.component.html',
  styleUrls: ['./broadcast.component.scss']
})
export class BroadcastComponent implements OnInit {

  aliceOverride?: string;

  messages: any[] = [ ];

  constructor() { }

  ngOnInit(): void { }

  onNewMessage(message: any): void {
    this.messages.push(message);
    this.aliceOverride = undefined;
  }

  onSpoof(message: any): void {
    console.log(message);
    this.aliceOverride = message.message;
  }
}
