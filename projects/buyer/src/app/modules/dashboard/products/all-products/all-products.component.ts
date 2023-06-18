import { FormControl } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnDestroy {
  page: number = 1;
  bigGridProducts: boolean = false;
  rowGridProducts: boolean = true;
  categories: string[] = [
    'Automotive',
    'Baby Fashion',
    'Baby Products',
    'Beauty',
    'Books',
    'Boys Fashion',
    'Electronics',
    'Fashion',
    'Garden',
    'Girls Fashion',
    'Grocery',
    'Mens Fashion',
    'Office Products',
  ];

  categorySelect: FormControl = new FormControl();
  filters: string[] = [
    '1 to 10 EGP',
    '10 to 100 EGP',
    '100 to 1000 EGP',
    '1000 to 10000 EGP',
    '10000 to 100000 EGP',
    '100000 to 1000000 EGP',
  ];

  filterSelect: FormControl = new FormControl();
  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }

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
    {
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
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
      id: 10,
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
      id: 11,
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
      id: 12,
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
      id: 13,
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
      id: 14,
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
      id: 15,
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
      id: 16,
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
      id: 17,
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
      id: 18,
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
      id: 19,
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
      id: 20,
      name: 'Oppo A96 Dual SIM',
      price: 9188,
      lastPrice: 10000,
      image: 'assets/images/prod-1.jpg',
      discount: 99,
      rating: [1, 1, 0.5, 0, 0],
      inCart: false,
      inFavourites: true,
    },
  ];

  showBodyFilter(ele: any, event: any) {
    ele.classList.contains('show')
      ? event.srcElement.offsetParent.classList.add('active')
      : event.srcElement.offsetParent.classList.remove('active');
    ele.classList.toggle('show');
  }

  changePage(event: any) {
    this.page = event;
  }

  destroyed = new Subject<void>();
  currentScreenSize!: string;

  // Create a map to display breakpoint names for demonstration purposes.
  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe((result: { breakpoints: { [x: string]: any } }) => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.currentScreenSize =
              this.displayNameMap.get(query) ?? 'Unknown';
          }
        }
      });
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
