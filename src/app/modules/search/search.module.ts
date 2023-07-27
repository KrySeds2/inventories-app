import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPage } from './search.page';
import { SearchRoutingModule } from './search-routing.module';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchRoutingModule,
    InputTextModule,
    ReactiveFormsModule,

  ],
  declarations: [SearchPage],

})
export class SearchPageModule {}
