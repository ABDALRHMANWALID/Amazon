import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
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
  ];

  deleteCart(index: number) {
    this.products.splice(index, 1);
  }

  copyLinkProduct(id: number) {
    navigator.clipboard.writeText(`http://localhost:4200/product/:${id}`);
  }

  add_cart: number = 1;
}
