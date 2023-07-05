import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { SellerComponent } from './seller.component';
import { InfoSellerComponent } from './info-seller/info-seller.component';
import { StatisticsSellerComponent } from './statistics-seller/statistics-seller.component';
import { ReviewsSellerComponent } from './reviews-seller/reviews-seller.component';
import { ProductsSellerComponent } from './products-seller/products-seller.component';
import { MaterialModule } from '../../../shared/material/material.module';

@NgModule({
  declarations: [
    SellerComponent,
    InfoSellerComponent,
    StatisticsSellerComponent,
    ReviewsSellerComponent,
    ProductsSellerComponent,
  ],
  imports: [CommonModule, SellerRoutingModule, MaterialModule],
})
export class SellerModule {}
