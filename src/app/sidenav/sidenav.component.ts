import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // @Output() addtocart=new EventEmitter();
  // addtocartc(){
  //   this.addtocart.emit("a")
  // }
}

