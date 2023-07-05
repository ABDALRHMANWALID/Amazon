import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewOrderRoutingModule } from './new-order-routing.module';
import { NewOrderComponent } from './new-order.component';
import { MaterialModule } from 'projects/buyer/src/app/shared/material/material.module';
import { AddressComponent } from './address/address.component';
import { InfoOrderComponent } from './info-order/info-order.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    NewOrderComponent,
    AddressComponent,
    InfoOrderComponent,
    PaymentComponent,
  ],
  imports: [CommonModule, NewOrderRoutingModule, MaterialModule],
})
export class NewOrderModule {}
