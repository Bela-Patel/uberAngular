import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { bookcabRoutingModule } from './bookcab-routing.module';
import { BookcabComponent } from './bookcab.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [BookcabComponent],
  imports: [
    CommonModule,
      bookcabRoutingModule,
      ReactiveFormsModule
  ],
  exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class bookcabModule { }
