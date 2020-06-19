import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookcabComponent } from './bookcab.component';

const routes: Routes = [{ path: '', component: BookcabComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class bookcabRoutingModule { }
