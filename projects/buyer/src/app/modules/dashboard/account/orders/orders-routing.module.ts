import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./my-orders/my-orders.module').then((m) => m.MyOrdersModule),
      },
      {
        path: 'new',
        loadChildren: () =>
          import('./new-order/new-order.module').then((m) => m.NewOrderModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}
