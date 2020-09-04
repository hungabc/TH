import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-th1-bai1',
  templateUrl: './th1-bai1.component.html',
  styleUrls: ['./th1-bai1.component.css']
})
export class Th1Bai1Component implements OnInit {
  x:any;
  n:any;
  tong=0;
  ngOnInit(): void {
   }
   tinh(){
    for( let i=0;i<=Number.parseInt(this.n);i++){
      this.tong+=Math.pow(Number.parseInt(this.x),i);
    }
   }
}
