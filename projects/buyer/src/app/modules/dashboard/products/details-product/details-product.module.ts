import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsProductRoutingModule } from './details-product-routing.module';
import { InformationsComponent } from './informations/informations.component';
import { RelatedProductsComponent } from './related-products/related-products.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { DetailsProductComponent } from './details-product.component';
import { MaterialModule } from 'projects/buyer/src/app/shared/material/material.module';
import { FormsModule } from '@angular/forms';
import { NgxImageZoomModule } from 'ngx-image-zoom';

@NgModule({
  declarations: [
    InformationsComponent,
    RelatedProductsComponent,
    ReviewsComponent,
    DetailsProductComponent,
  ],
  imports: [
    CommonModule,
    DetailsProductRoutingModule,
    MaterialModule,
    FormsModule,
    NgxImageZoomModule,
  ],
})
export class DetailsProductModule {}
