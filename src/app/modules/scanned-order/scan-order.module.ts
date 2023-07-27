import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScanOrderPage } from './scan-order.page';
import { ScanOrderRoutingModule } from './scan-order-routing.module';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanOrderRoutingModule,
    InputTextModule,
    ReactiveFormsModule,

  ],
  declarations: [ScanOrderPage],

})
export class ScanOrderPageModule {}
