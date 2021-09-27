import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service"
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private api:ApiService) { }
username:any;
cartitems=[];
menuItmes=[
  {"menuname":"Shoes","menulink":"/shoes",},
  {"menuname":"Tvs","menulink":"/tvs"},
  {"menuname":"Furniture","menulink":"/tvs"}]
  ngOnInit(): void {
    this.cartitems=this.api.cartitmes;
  }
  
}
