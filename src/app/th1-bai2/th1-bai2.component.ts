import { Component, OnInit } from '@angular/core';
import { TinhtongComponent } from '../tinhtong/tinhtong.component';

@Component({
  selector: 'app-th1-bai2',
  templateUrl: './th1-bai2.component.html',
  styleUrls: ['./th1-bai2.component.css']
})
export class Th1Bai2Component implements OnInit {
  constructor() { }
  x:any;
  n:any;
  tong=0;
  ngOnInit(): void {
    }
    tinh(){
      for(let i=1;i<Number.parseInt(this.n);i++){
        this.tong+=Math.pow(-1,Number.parseInt(this.n))
      }
    }
  }
