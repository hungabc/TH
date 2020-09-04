import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-th1-bai6',
  templateUrl: './th1-bai6.component.html',
  styleUrls: ['./th1-bai6.component.css']
})
export class Th1Bai6Component implements OnInit {
  constructor() { }
   ds = [-5,-1,3,4,8,-43,10,25,55];
   kq=0;
  ngOnInit(): void {
    for(let i=0; i<this.ds.length;i++)
    {
      if(this.ds[i]>0)
      this.kq+=this.ds[i];
    }
    console.log(this.kq)
  }
}
