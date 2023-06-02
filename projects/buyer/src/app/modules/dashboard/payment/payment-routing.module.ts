import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectAddressComponent } from './address/select-address/select-address.component';
import { MapAddressComponent } from './address/map-address/map-address.component';
import { FormAddressComponent } from './address/form-address/form-address.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { addressGuard } from '../../../core/guards/address.guard';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';
import { PaymentComponent } from './payment.component';

const routes: Routes = [
  {
    path: '',
    component: PaymentComponent,
    children: [
      { path: '', component: SelectAddressComponent },
      { path: 'address/select', component: SelectAddressComponent },
      { path: 'address/map', component: MapAddressComponent },
      { path: 'address/form', component: FormAddressComponent },
      {
        path: 'info',
        component: PlaceOrderComponent,
        canActivate: [addressGuard],
      },
      {
        path: 'select',
        component: PaymentMethodsComponent,
        canActivate: [addressGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentRoutingModule {}
