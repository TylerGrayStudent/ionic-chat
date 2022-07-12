/* eslint-disable @typescript-eslint/member-ordering */
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tg-message-bubble',
  templateUrl: './message-bubble.component.html',
  styleUrls: ['./message-bubble.component.scss'],
})
export class MessageBubbleComponent implements OnInit {
  @Input() message: string;
  @Input() color: 'blue' | 'green' = 'blue';
  @Input() set from(val: 'me' | 'them') {
    this.class = `from-${val}`;
  }
  public class = 'from-me';

  constructor() {}

  ngOnInit() {}
}
