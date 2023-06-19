import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./all-products/all-products.module').then(
            (m) => m.AllProductsModule
          ),
      },
      {
        path: ':id',
        loadChildren: () =>
          import('./details-product/details-product.module').then(
            (m) => m.DetailsProductModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
