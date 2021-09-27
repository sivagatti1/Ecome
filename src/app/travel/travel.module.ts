import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TravelRoutingModule } from './travel-routing.module';
import { TravelComponent } from './travel.component';
import { TrainTicketsComponent } from './train-tickets/train-tickets.component';
import { FlightTicketsComponent } from './flight-tickets/flight-tickets.component';


@NgModule({
  declarations: [
    TravelComponent,
    TrainTicketsComponent,
    FlightTicketsComponent
  ],
  imports: [
    CommonModule,
    TravelRoutingModule
  ]
})
export class TravelModule { }
