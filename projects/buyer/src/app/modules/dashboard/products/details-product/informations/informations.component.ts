import { Component } from '@angular/core';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.scss'],
})
export class InformationsComponent {
  add_cart: number = 0;
  images: { small: string; big: string }[] = [
    {
      small: 'assets/images/small-prod-1.jpg',
      big: 'assets/images/big-prod-1.jpg',
    },
    {
      small: 'assets/images/small-prod-2.jpg',
      big: 'assets/images/big-prod-2.jpg',
    },
    {
      small: 'assets/images/small-prod-3.jpg',
      big: 'assets/images/big-prod-3.jpg',
    },
    {
      small: 'assets/images/small-prod-4.jpg',
      big: 'assets/images/big-prod-4.jpg',
    },
    {
      small: 'assets/images/small-prod-5.jpg',
      big: 'assets/images/big-prod-5.jpg',
    },
  ];
  mainImage: string = this.images[0].big;

  brand: string = 'OPPO';
  rating: number[] = [1, 1, 1, 0, 0];

  details: { name: string; value: string | number | boolean }[] = [
    { name: 'Brand', value: 'Apple' },
    { name: 'Screen size', value: '13 Inches' },
    { name: 'Color', value: 'Grey' },
    { name: 'Hard disk size', value: '256 GB' },
    { name: 'Operating System', value: 'Mac OS' },
    { name: 'Graphics card description', value: 'Integrated' },
    { name: 'CPU speed', value: '3.2 GHz' },
    { name: 'Item weight', value: '1.4 Kilograms' },
    { name: 'Processor count', value: '8' },
    { name: 'Graphics Chipset Brand', value: 'Intel' },
  ];
}
