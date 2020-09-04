import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-th1-bai7',
  templateUrl: './th1-bai7.component.html',
  styleUrls: ['./th1-bai7.component.css']
})
export class Th1Bai7Component implements OnInit {
  a:number;  b:number;  c:number;
  x1:number;  x2:number;  x3:number;  x4:number;
  ALERT: string;
  constructor() { }
  ngOnInit(): void {
  }
  kq() {
    let pt = new PhuongTrinh(this.a, this.b, this.c);
    let giai = pt.giai();
    if(giai == 0) {
      this.ALERT = "Phương trình vô nghiệm";
    } else if(giai == 1) {
      if(pt.x1 < 0) {
        this.ALERT = "Phương trình vô nghiệm";
      } else if(pt.x1 == 0) {
        this.ALERT = "Phương trình có 1 nghiệm";
        this.x1 = 0;
      } else {
        this.ALERT = "Phương trình có 2 nghiệm";
        this.x2 = Math.sqrt(pt.x1);
        this.x2 = -Math.sqrt(pt.x1);
      }
    } else {
      if(pt.x1 < 0) {
        if(pt.x2 < 0) {
          this.ALERT = "Phương trình vô nghiệm";
        } else if(pt.x1 == 0) {
          this.ALERT = "Phương trình có 1 nghiệm";
          this.x1 = 0;
        } else {
          this.ALERT = "Phương trình có 2 nghiệm";
          this.x1 = Math.sqrt(pt.x2);
          this.x2 = -Math.sqrt(pt.x2);
        }
      } else if(pt.x1 == 0) {
        if(pt.x2 < 0) {
          this.ALERT = "Phương trình có 1 nghiệm";
          this.x1 = 0;
        } else {
          this.ALERT = "Phương trình có 3 nghiệm";
          this.x1 = Math.sqrt(pt.x2);
          this.x2 = -Math.sqrt(pt.x2);
          this.x3 = 0;
        }
      } else {
        if(pt.x2 < 0) {
          this.ALERT = "Phương trình có 2 nghiệm";
          this.x1 = Math.sqrt(pt.x1);
          this.x2 = -Math.sqrt(pt.x1);
        } else if(pt.x2 == 0) {
          this.ALERT = "Phương trình có 3 nghiệm";
          this.x1 = Math.sqrt(pt.x1);
          this.x2 = -Math.sqrt(pt.x1);
          this.x3 = 0;
        } else {
          this.ALERT = "Phương trình có 4 nghiệm";
          this.x1 = Math.sqrt(pt.x1);
          this.x2 = -Math.sqrt(pt.x1);
          this.x3 = Math.sqrt(pt.x2);
          this.x4 = -Math.sqrt(pt.x2);
        }
      }
    }
  }
}
export class PhuongTrinh {
  a:number;
  b:number;
  c:number;
  x1:number;
  x2:number;
  constructor(a:number, b:number, c:number) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  giai() {
    let delta = this.b * this.b - 4 * this.a * this.c;
    if (delta < 0) {
        this.x1 = this.x2 = 0.0;
        return 0;
    }
    else if (delta == 0) {
      this.x1 = this.x2 = -this.b / (2 * this.a);
        return 1;
    }
    else {
        delta = Math.sqrt(delta);
        this.x1 = (-this.b + delta) / (2 * this.a);
        this.x2 = (-this.b - delta) / (2 * this.a);
        return 2;
    }
  }
}
