import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressRoutingModule } from './address-routing.module';
import { AddressComponent } from './address.component';
import { OptionsAddressComponent } from './options-address/options-address.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { AddressMapComponent } from './address-map/address-map.component';
import { MaterialModule } from 'projects/buyer/src/app/shared/material/material.module';

@NgModule({
  declarations: [
    // AddressComponent,
    OptionsAddressComponent,
    AddressFormComponent,
    AddressMapComponent,
  ],
  imports: [CommonModule, AddressRoutingModule, MaterialModule],
})
export class AddressModule {}
