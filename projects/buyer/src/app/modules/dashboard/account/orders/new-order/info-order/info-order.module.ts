import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoOrderRoutingModule } from './info-order-routing.module';
import { InfoOrderComponent } from './info-order.component';

@NgModule({
  declarations: [
    // InfoOrderComponent
  ],
  imports: [CommonModule, InfoOrderRoutingModule],
})
export class InfoOrderModule {}
