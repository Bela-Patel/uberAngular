import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';

import { LookingcabRoutingModule } from './lookingcab-routing.module';
import { LookingcabComponent } from './lookingcab.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MydialogComponent } from '../mydialog/mydialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
    declarations: [LookingcabComponent, MydialogComponent],
    imports: [
        CommonModule,
        LookingcabRoutingModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule
    ],

    entryComponents: [
        MydialogComponent
    ],

    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class LookingcabModule { }
