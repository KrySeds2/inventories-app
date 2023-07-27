import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './modules/login/login.page';
import { LoginPageModule } from './modules/login/login.module';

const routes: Routes = [
  {
    path: 'login',
    canActivate: [],
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginPageModule)
  }, {
    path: 'buscar-pedido',
    canActivate: [],
    loadChildren: () => import('./modules/search/search.module').then(m => m.SearchPageModule)
  },{
    path:'descargar-pedido',
    canActivate:[],
    loadChildren: () => import('./modules/download/download.module').then(m => m.DownloadPageModule)
  },{
    path:'escaneo-pedido',
    canActivate:[],
   loadChildren:()=> import('./modules/scan/scan.module').then(m => m.ScanPageModule)
  }
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { preloadingStrategy: PreloadAllModules, useHash: true }),
    LoginPageModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
