import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightTicketsComponent } from './flight-tickets/flight-tickets.component';
import { TrainTicketsComponent } from './train-tickets/train-tickets.component';
import { TravelComponent } from './travel.component';
const routes: Routes = [{ path: '', component: TravelComponent },
{ path: 'traintickets', component: TrainTicketsComponent },
{ path: 'flightickets', component: FlightTicketsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelRoutingModule { }
