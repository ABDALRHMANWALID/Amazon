import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewOrderComponent } from './new-order.component';

const routes: Routes = [
  {
    path: '',
    component: NewOrderComponent,
    children: [
      {
        path: 'address',
        loadChildren: () =>
          import('./address/address.module').then((m) => m.AddressModule),
      },
      {
        path: 'info-order',
        loadChildren: () =>
          import('./info-order/info-order.module').then(
            (m) => m.InfoOrderModule
          ),
      },
      {
        path: 'payment',
        loadChildren: () =>
          import('./payment/payment.module').then((m) => m.PaymentModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewOrderRoutingModule {}
