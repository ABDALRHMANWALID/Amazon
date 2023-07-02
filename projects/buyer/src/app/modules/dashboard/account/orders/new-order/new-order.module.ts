import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewOrderRoutingModule } from './new-order-routing.module';
import { NewOrderComponent } from './new-order.component';


@NgModule({
  declarations: [
    NewOrderComponent
  ],
  imports: [
    CommonModule,
    NewOrderRoutingModule
  ]
})
export class NewOrderModule { }
