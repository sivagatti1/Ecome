import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tvs',
  templateUrl: './tvs.component.html',
  styleUrls: ['./tvs.component.css']
})
export class TvsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("tvs")
  }
  ngOnDestroy(){
    console.log("tvs component Destroyed");
    
  }
  productsc:any=[
    {
      "imgSrc":"https://rukminim1.flixcart.com/image/832/832/kdakakw0/television/j/6/a/iffalcon-43f2a-43f2a-original-imafu7kkvqvpzhbe.jpeg?q=70",
    "cost":200
    },
    {
      "imgSrc":"https://rukminim1.flixcart.com/image/832/832/kdakakw0/television/j/6/a/iffalcon-43f2a-43f2a-original-imafu7kkvqvpzhbe.jpeg?q=70",
    "cost":400
    }
  ]
  
}
