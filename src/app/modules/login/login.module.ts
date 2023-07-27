import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPage } from './login.page';
import { ModulesRoutingModule } from './modules-routing.module';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModulesRoutingModule,
    InputTextModule,
    ReactiveFormsModule,

  ],
  declarations: [LoginPage],

})
export class LoginPageModule {}
