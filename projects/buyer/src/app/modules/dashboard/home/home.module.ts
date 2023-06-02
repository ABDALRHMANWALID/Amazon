import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LandingComponent } from './landing/landing.component';
import { CategoriesComponent } from './categories/categories.component';
import { TopDealsComponent } from './top-deals/top-deals.component';
import { TodayDealsComponent } from './today-deals/today-deals.component';
import { EventDealsComponent } from './event-deals/event-deals.component';


@NgModule({
  declarations: [
    HomeComponent,
    LandingComponent,
    CategoriesComponent,
    TopDealsComponent,
    TodayDealsComponent,
    EventDealsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
