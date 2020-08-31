import { Component, OnInit, ViewChild } from '@angular/core';
import { NhapabComponent } from './nhapab/nhapab.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  app = "Xây dựng chương trình tính tổng hai số"
  giatritong:any;
  a:any;
  b:any;
  @ViewChild(NhapabComponent , { static: false }) nhaplieu: NhapabComponent;
  ngOnInit() {  
  } 
  Tinh(){
    this.a = this.nhaplieu.a;
    this.b = this.nhaplieu.b;
    this.giatritong  =  Number.parseInt(this.nhaplieu.a) +  Number.parseInt(this.nhaplieu.b);     
  }
}

