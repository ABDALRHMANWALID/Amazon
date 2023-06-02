import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat.component';
import { AllChatComponent } from './all-chat/all-chat.component';
import { SingleChatComponent } from './single-chat/single-chat.component';

const routes: Routes = [
  {
    path: '',
    component: ChatComponent,
    children: [
      { path: '', component: AllChatComponent },
      { path: ':email', component: SingleChatComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatRoutingModule {}
