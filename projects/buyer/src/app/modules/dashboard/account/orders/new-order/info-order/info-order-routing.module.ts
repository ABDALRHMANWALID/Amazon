import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoOrderComponent } from './info-order.component';

const routes: Routes = [{ path: '', component: InfoOrderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoOrderRoutingModule {}
