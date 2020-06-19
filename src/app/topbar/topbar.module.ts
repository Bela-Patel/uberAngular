import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopbarRoutingModule } from './topbar-routing.module';
import { TopbarComponent } from './topbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [TopbarComponent],
  imports: [
      CommonModule,
      TopbarRoutingModule,
      ReactiveFormsModule
  ],
  exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class TopbarModule { }
