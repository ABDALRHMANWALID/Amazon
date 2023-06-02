import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsProductRoutingModule } from './details-product-routing.module';
import { InformationsComponent } from './informations/informations.component';
import { RelatedProductsComponent } from './related-products/related-products.component';
import { ReviewsComponent } from './reviews/reviews.component';


@NgModule({
  declarations: [
    InformationsComponent,
    RelatedProductsComponent,
    ReviewsComponent
  ],
  imports: [
    CommonModule,
    DetailsProductRoutingModule
  ]
})
export class DetailsProductModule { }
