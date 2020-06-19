import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        //component: LoginComponent
        path: '',
        loadChildren: () => import('./login/login.module').then(m => m.LoginFormModule)
    },

    { path: 'lookingcab', loadChildren: () => import('./lookingcab/lookingcab.module').then(m => m.LookingcabModule) },

    { path: 'ridertrip', loadChildren: () => import('./ridertrip/ridertrip.module').then(m => m.RidertripModule) },

    { path: 'detailmytrip', loadChildren: () => import('src/app/detailmytrip/detailmytrip.module').then(m => m.DetailMyTripModule) }, 

    //{ path: 'topbar', loadChildren: () => import('src/app/topbar/topbar.module').then(m => m.TopbarModule ) }, 

    { path: 'wallet', loadChildren: () => import('./wallet/wallet.module').then(m => m.WalletModule) },

    { path: 'bookcab', loadChildren: () => import('./bookcab/bookcab.module').then(m => m.bookcabModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
