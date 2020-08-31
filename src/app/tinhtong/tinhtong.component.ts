import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tinhtong',
  templateUrl: './tinhtong.component.html',
  styleUrls: ['./tinhtong.component.css']
})
export class TinhtongComponent implements OnInit {
  a:any;
  b:any;
  @Output() giatritongChanged: EventEmitter<any> = new EventEmitter(); 
  constructor() { }
  ngOnInit(): void {
  }
  Tinh(){
    let giatritong  =  Number.parseInt(this.a) +  Number.parseInt(this.b);
    this.giatritongChanged.emit(giatritong);
  }
}
