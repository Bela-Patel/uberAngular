import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailMyTripRoutingModule } from './detailmytrip-routing.module';
import { DetailmytripComponent } from './detailmytrip.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [DetailmytripComponent],
  imports: [
    CommonModule,
      DetailMyTripRoutingModule,
      ReactiveFormsModule
  ],
  exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class DetailMyTripModule { }
