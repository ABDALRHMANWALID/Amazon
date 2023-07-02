import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { MaterialModule } from '../../../shared/material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AccountComponent, CartComponent, OrdersComponent],
  imports: [CommonModule, AccountRoutingModule, MaterialModule, FormsModule],
})
export class AccountModule {}
