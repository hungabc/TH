import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tong',
  templateUrl: './tong.component.html',
  styleUrls: ['./tong.component.css']
})
export class TongComponent implements OnInit {
  @Input() giatritong: any;
  constructor() { }

  ngOnInit(): void {
  }

}
