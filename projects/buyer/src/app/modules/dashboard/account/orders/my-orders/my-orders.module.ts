import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyOrdersRoutingModule } from './my-orders-routing.module';
import { MyOrdersComponent } from './my-orders.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { DetailsOrderComponent } from './details-order/details-order.component';
import { MaterialModule } from 'projects/buyer/src/app/shared/material/material.module';

@NgModule({
  declarations: [MyOrdersComponent, AllOrdersComponent, DetailsOrderComponent],
  imports: [CommonModule, MyOrdersRoutingModule, MaterialModule],
})
export class MyOrdersModule {}
