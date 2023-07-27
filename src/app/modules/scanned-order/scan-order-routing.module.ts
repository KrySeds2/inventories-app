import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScanOrderPage } from './scan-order.page';



const routes: Routes = [
  {
    path: '',
   component: ScanOrderPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScanOrderRoutingModule {}
