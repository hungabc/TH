import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { TongComponent } from './tong/tong.component';
import { TinhtongComponent } from './tinhtong/tinhtong.component';
import { NhapabComponent } from './nhapab/nhapab.component';
import { Th1Bai1Component } from './th1-bai1/th1-bai1.component';
import { Th1Bai2Component } from './th1-bai2/th1-bai2.component';
import { Th1Bai3Component } from './th1-bai3/th1-bai3.component';
import { Th1Bai4Component } from './th1-bai4/th1-bai4.component';
import { Th1Bai5Component } from './th1-bai5/th1-bai5.component';
import { Th1Bai6Component } from './th1-bai6/th1-bai6.component';
import { Th1Bai7Component } from './th1-bai7/th1-bai7.component';
import { Th1Bai8Component } from './th1-bai8/th1-bai8.component';
@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    TestComponent,
    TongComponent,
    TinhtongComponent,
    NhapabComponent,
    Th1Bai1Component,
    Th1Bai2Component,
    Th1Bai3Component,
    Th1Bai4Component,
    Th1Bai5Component,
    Th1Bai6Component,
    Th1Bai7Component,
    Th1Bai8Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
