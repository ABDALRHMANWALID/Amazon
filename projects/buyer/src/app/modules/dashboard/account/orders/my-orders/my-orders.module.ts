import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyOrdersRoutingModule } from './my-orders-routing.module';
import { MyOrdersComponent } from './my-orders.component';


@NgModule({
  declarations: [
    MyOrdersComponent
  ],
  imports: [
    CommonModule,
    MyOrdersRoutingModule
  ]
})
export class MyOrdersModule { }
