import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FashionsRoutingModule } from './fashions-routing.module';
import { FashionsComponent } from './fashions.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { ShitsComponent } from './shits/shits.component';
import { Shits2Component } from './shits2/shits2.component';
import { Shits3Component } from './shits3/shits3.component';


@NgModule({
  declarations: [
    FashionsComponent,
    ShirtsComponent,
    ShitsComponent,
    Shits2Component,
    Shits3Component
  ],
  imports: [
    CommonModule,
    FashionsRoutingModule
  ],
  exports:[FashionsComponent,ShirtsComponent]
})
export class FashionsModule { }
