import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-th1-bai4',
  templateUrl: './th1-bai4.component.html',
  styleUrls: ['./th1-bai4.component.css']
})
export class Th1Bai4Component implements OnInit {
  constructor() { }
  s = [{ten: 'Nguyen Thi Mai', qq: 'Hung Yen', dt:9},
       {ten: 'Tran Thi Anh', qq: 'Ha Noi', dt:7.5},
       {ten: 'Hoang Thi Dung', qq: 'Hai Phong', dt:8.3}
      ];
  ngOnInit(): void {
    console.log(this.s.filter(sv => {
      return sv.qq == 'Hai Phong' && sv.dt > 8;
    }));
  }
}
