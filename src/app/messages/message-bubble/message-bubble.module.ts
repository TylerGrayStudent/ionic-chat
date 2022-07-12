import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageBubbleComponent } from './message-bubble.component';

import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [MessageBubbleComponent],
  imports: [CommonModule, FormsModule, IonicModule],
  exports: [MessageBubbleComponent],
})
export class MessageBubbleModule {}
