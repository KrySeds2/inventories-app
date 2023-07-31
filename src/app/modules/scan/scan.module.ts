import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScanPage } from './scan.page';
import { ScanRoutingModule } from './scan-routing.module';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanRoutingModule,
    InputTextModule,
    ReactiveFormsModule,
    CalendarModule


  ],
  declarations: [ScanPage],

})
export class ScanPageModule {}
