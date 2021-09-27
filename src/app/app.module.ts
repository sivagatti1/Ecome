import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FormsModule } from '@angular/forms';
import { UpperPipe } from './upper.pipe';
import { YellowDirective } from './yellow.directive';
import { ProductsComponent } from './products/products.component';
import { TvsComponent } from './tvs/tvs.component';
import { ShoesComponent } from './shoes/shoes.component';
import {HttpClientModule} from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';
import { ElectronicsModule } from './electronics/electronics.module';
import { TableComponent } from './table/table.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    UpperPipe,
    YellowDirective,
    ProductsComponent,
    TvsComponent,
    ShoesComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ElectronicsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
