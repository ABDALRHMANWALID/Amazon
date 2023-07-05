import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address.component';
import { OptionsAddressComponent } from './options-address/options-address.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { AddressMapComponent } from './address-map/address-map.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: AddressComponent,
  //   children: [
  { path: '', component: OptionsAddressComponent },
  {
    path: 'form',
    component: AddressFormComponent,
  },
  {
    path: 'map',
    component: AddressMapComponent,
  },
  // ],
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddressRoutingModule {}
