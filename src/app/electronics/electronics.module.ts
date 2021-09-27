import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobilesComponent } from './mobiles/mobiles.component';



@NgModule({
  declarations: [
    MobilesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[MobilesComponent]
})
export class ElectronicsModule { }
