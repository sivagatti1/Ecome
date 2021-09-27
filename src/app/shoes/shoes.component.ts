import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent implements OnInit {

  constructor(private api:ApiService) { }
  ngOnDestroy(){
    console.log("Shoes component Destroyed");
    
  }
  productsc=[]
  ngOnInit(): void {
   this.getShoeProducts(); 
   this.api.postShoeProducts1().subscribe(data=>{
     console.log(data);
     
   })
  }
  getShoeProducts(){
    this.api.getShoeProducts1().subscribe((data:any)=>{
      this.productsc=data
    })
  }
  
  
}
