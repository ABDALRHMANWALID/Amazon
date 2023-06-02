import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { cartGuard } from '../../../core/guards/cart.guard';
import { OrdersComponent } from './orders/orders.component';
import { orderGuard } from '../../../core/guards/order.guard';
import { AccountComponent } from './account.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      { path: '', component: CartComponent, canActivate: [cartGuard] },
      { path: 'cart', component: CartComponent, canActivate: [cartGuard] },
      { path: 'orders', component: OrdersComponent, canActivate: [orderGuard] },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
