import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-th1-bai5',
  templateUrl: './th1-bai5.component.html',
  styleUrls: ['./th1-bai5.component.css']
})
export class Th1Bai5Component implements OnInit {
  constructor() { }
  ngOnInit(): void {
    let socantim = (a) =>{
      return   Math.pow(Math.floor(Math.sqrt(a)),2)==a;
    }
    let tong = [3,4,8,10,25,55].filter(socantim);
    console.log(tong);
  }

}
