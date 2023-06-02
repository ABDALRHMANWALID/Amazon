import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';


@NgModule({
  declarations: [
    AccountComponent,
    CartComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
