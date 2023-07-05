import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-order',
  templateUrl: './details-order.component.html',
  styleUrls: ['./details-order.component.scss'],
})
export class DetailsOrderComponent implements OnInit {
  order: any = {
    id: 1,
    total: 999,
    numItem: 99,
    date: '2023 / 4 / 7',
    address: 'Egypt',
    products: [
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
        numCart: 1,
      },
      {
        id: 2,
        name: 'Oppo A96 Dual SIM',
        price: 9188,
        lastPrice: 10000,
        image: 'assets/images/prod-1.jpg',
        discount: 99,
        rating: [1, 1, 0.5, 0, 0],
        inCart: true,
        inFavourites: true,
        numCart: 2,
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
        numCart: 3,
      },
      {
        id: 4,
        name: 'Oppo A96 Dual SIM',
        price: 9188,
        lastPrice: 10000,
        image: 'assets/images/prod-1.jpg',
        discount: 99,
        rating: [1, 1, 0.5, 0, 0],
        inCart: true,
        inFavourites: true,
        numCart: 4,
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
        numCart: 5,
      },
    ],
  };
  constructor() {}

  ngOnInit(): void {}
}
