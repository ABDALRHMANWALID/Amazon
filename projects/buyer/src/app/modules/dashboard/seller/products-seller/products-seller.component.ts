import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-seller',
  templateUrl: './products-seller.component.html',
  styleUrls: ['./products-seller.component.scss'],
})
export class ProductsSellerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
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
