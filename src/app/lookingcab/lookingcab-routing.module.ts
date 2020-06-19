import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LookingcabComponent } from './lookingcab.component';

const routes: Routes = [
    { path: '', component: LookingcabComponent, outlet: "topbar"},
    { path: 'bookcab', loadChildren: () => import('src/app/bookcab/bookcab.module').then(m => m.bookcabModule) },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LookingcabRoutingModule { }
