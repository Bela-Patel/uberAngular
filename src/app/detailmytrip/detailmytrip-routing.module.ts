import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailmytripComponent } from './detailmytrip.component';

const routes: Routes = [{ path: '', component: DetailmytripComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailMyTripRoutingModule { }
