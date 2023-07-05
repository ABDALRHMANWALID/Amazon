import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment.component';
import { MaterialModule } from 'projects/buyer/src/app/shared/material/material.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, PaymentRoutingModule, MaterialModule],
})
export class PaymentModule {}
