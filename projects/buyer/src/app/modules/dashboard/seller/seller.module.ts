import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { SellerComponent } from './seller.component';
import { InfoSellerComponent } from './info-seller/info-seller.component';
import { StatisticsSellerComponent } from './statistics-seller/statistics-seller.component';
import { ReviewsSellerComponent } from './reviews-seller/reviews-seller.component';
import { ProductsSellerComponent } from './products-seller/products-seller.component';


@NgModule({
  declarations: [
    SellerComponent,
    InfoSellerComponent,
    StatisticsSellerComponent,
    ReviewsSellerComponent,
    ProductsSellerComponent
  ],
  imports: [
    CommonModule,
    SellerRoutingModule
  ]
})
export class SellerModule { }
