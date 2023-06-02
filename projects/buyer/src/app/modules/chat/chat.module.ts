import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { AllChatComponent } from './all-chat/all-chat.component';
import { SingleChatComponent } from './single-chat/single-chat.component';


@NgModule({
  declarations: [
    ChatComponent,
    AllChatComponent,
    SingleChatComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }
