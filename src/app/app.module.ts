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
@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    TestComponent,
    TongComponent,
    TinhtongComponent,
    NhapabComponent,
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
