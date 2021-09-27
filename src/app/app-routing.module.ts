import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvsComponent } from './tvs/tvs.component';
import { ShoesComponent } from './shoes/shoes.component';
import { AdminGuard } from './admin.guard';
const routes: Routes = [
  {path:"",component:ShoesComponent},
  {path:"shoes",component:ShoesComponent},
  {path:"tvs",component:TvsComponent},
  { path: 'travel', 
  loadChildren: () => import('./travel/travel.module').then(m => m.TravelModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
