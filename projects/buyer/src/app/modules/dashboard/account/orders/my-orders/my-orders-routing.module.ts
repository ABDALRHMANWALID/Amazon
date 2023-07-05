import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { DetailsOrderComponent } from './details-order/details-order.component';
import { MyOrdersComponent } from './my-orders.component';

const routes: Routes = [
  {
    path: '',
    component: MyOrdersComponent,
    children: [
      {
        path: '',
        component: AllOrdersComponent,
      },
      {
        path: ':id',
        component: DetailsOrderComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyOrdersRoutingModule {}
