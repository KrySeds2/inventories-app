import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DownloadPage } from './download.page';
import { DownloadRoutingModule } from './download-routing.module';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DownloadRoutingModule,
    InputTextModule,
    ReactiveFormsModule,

  ],
  declarations: [DownloadPage],

})
export class DownloadPageModule {}
