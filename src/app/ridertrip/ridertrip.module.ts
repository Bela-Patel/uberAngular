import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RidertripRoutingModule } from './ridertrip-routing.module';
import { RidertripComponent } from './ridertrip.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [RidertripComponent],
  imports: [
    CommonModule,
      RidertripRoutingModule,
      ReactiveFormsModule
  ],
  exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class RidertripModule { }
