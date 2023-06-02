import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment.component';
import { SelectAddressComponent } from './address/select-address/select-address.component';
import { MapAddressComponent } from './address/map-address/map-address.component';
import { FormAddressComponent } from './address/form-address/form-address.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';


@NgModule({
  declarations: [
    PaymentComponent,
    SelectAddressComponent,
    MapAddressComponent,
    FormAddressComponent,
    PlaceOrderComponent,
    PaymentMethodsComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule
  ]
})
export class PaymentModule { }
