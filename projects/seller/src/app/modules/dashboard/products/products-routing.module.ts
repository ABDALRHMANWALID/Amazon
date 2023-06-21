import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { DetailsProductComponent } from './details-product/details-product.component';

const routes: Routes = [
  { path: '', component: AllProductsComponent },
  { path: 'add', component: AddProductsComponent },
  { path: ':id', component: DetailsProductComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
