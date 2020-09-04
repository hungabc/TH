import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-th1-bai3',
  templateUrl: './th1-bai3.component.html',
  styleUrls: ['./th1-bai3.component.css']
})
export class Th1Bai3Component implements OnInit {
  constructor() { }
  ngOnInit(): void {
    let bai3 = (a) => {
      let n =  a.lastIndexOf(' ');
      return a.substr(n+1) + ' ' + a.substr(0,n);
    }
    let tong =[{ten: 'Nguyen Thi Mai', dt:9},
               {ten: 'Tran Thi Anh', dt:7.5},
               {ten: 'Hoang Thi Dung', dt:8.3}
            ].sort((a,b)=> {
    if(bai3(a.ten)>bai3(b.ten)) return 1;
    else if(bai3(a.ten)<bai3(b.ten)) return -1;
    return 0;
  });
  console.log(tong);
  }
}
