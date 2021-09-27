import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FashionsComponent } from './fashions.component';

const routes: Routes = [{ path: '', component: FashionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FashionsRoutingModule { }
