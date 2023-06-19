import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllProductsRoutingModule } from './all-products-routing.module';
import { AllProductsComponent } from './all-products.component';
import { MaterialModule } from '../../../../shared/material/material.module';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [AllProductsComponent],
  imports: [
    CommonModule,
    AllProductsRoutingModule,
    MaterialModule,
    FormsModule,
    NgxPaginationModule,
  ],
})
export class AllProductsModule {}
