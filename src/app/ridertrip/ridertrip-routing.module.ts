import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RidertripComponent } from './ridertrip.component';

const routes: Routes = [
    { path: '', component: RidertripComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RidertripRoutingModule { }
