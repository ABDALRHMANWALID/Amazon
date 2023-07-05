import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
})
export class AddressFormComponent implements OnInit {
  countrys: string[] = [
    'country 1',
    'country 2',
    'country 3',
    'country 4',
    'country 5',
  ];
  regions: string[] = [
    'region 1',
    'region 2',
    'region 3',
    'region 4',
    'region 5',
  ];
  cities: string[] = ['city 1', 'city 2', 'city 3', 'city 4', 'city 5'];
  constructor() {}

  ngOnInit(): void {}
}
