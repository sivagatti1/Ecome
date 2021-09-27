import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() userdata:any;
  @Output() editdata=new EventEmitter();

  edit(user:any){
    this.editdata.emit(user)
  }
}

