import { Component } from '@angular/core';

@Component({
  selector: 'app-related-products',
  templateUrl: './related-products.component.html',
  styleUrls: ['./related-products.component.scss'],
})
export class RelatedProductsComponent {
  products: any[] = [
    {
      id: 1,
      name: 'Oppo A96 Dual SIM',
      price: 9188,
      lastPrice: 10000,
      image: 'assets/images/prod-1.jpg',
      discount: 99,
      rating: [1, 1, 1, 1, 1],
      inCart: true,
      inFavourites: false,
    },
    {
      id: 2,
      name: 'Oppo A96 Dual SIM',
      price: 9188,
      lastPrice: 10000,
      image: 'assets/images/prod-1.jpg',
      discount: 99,
      rating: [1, 1, 0.5, 0, 0],
      inCart: false,
      inFavourites: true,
    },
    {
      id: 3,
      name: 'Oppo A96 Dual SIM',
      price: 9188,
      lastPrice: 10000,
      image: 'assets/images/prod-1.jpg',
      discount: 99,
      rating: [1, 1, 1, 1, 1],
      inCart: true,
      inFavourites: false,
    },
    {
      id: 4,
      name: 'Oppo A96 Dual SIM',
      price: 9188,
      lastPrice: 10000,
      image: 'assets/images/prod-1.jpg',
      discount: 99,
      rating: [1, 1, 0.5, 0, 0],
      inCart: false,
      inFavourites: true,
    },
    {
      id: 5,
      name: 'Oppo A96 Dual SIM',
      price: 9188,
      lastPrice: 10000,
      image: 'assets/images/prod-1.jpg',
      discount: 99,
      rating: [1, 1, 1, 1, 1],
      inCart: true,
      inFavourites: false,
    },
  ];
}
