import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit(): void {
   
  }

@Input() products:any=[]
AddtoCart(product:any){
  this.api.addtocart(product)
}
}
