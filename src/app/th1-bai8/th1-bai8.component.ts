import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-th1-bai8',
  templateUrl: './th1-bai8.component.html',
  styleUrls: ['./th1-bai8.component.css']
})
export class Th1Bai8Component implements OnInit {
  constructor() { }
  h: any;
  dt: any;
  dtchop: any;
  ngOnInit(): void {

  }
  kq(){
    this.dtchop= (this.dt*this.h)/3;
  }

}