import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppHttpInterceptor } from './AppHttpInterceptor ';
import { CallNodeJsService } from './callnodejs.service';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as _ from 'lodash';
import { from } from 'rxjs';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
//import { GoogleMapsModule } from '@angular/google-maps'
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { PaymentDialogComponent } from './payment-dialog/payment-dialog.component';
import { CanceltrippopupComponent } from './canceltrippopup/canceltrippopup.component';

@NgModule({
  declarations: [
        AppComponent,
        PaymentDialogComponent,
        CanceltrippopupComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      BrowserAnimationsModule,
      ReactiveFormsModule,
      BrowserModule,
      FormsModule,
      NgxSpinnerModule,
      MatSelectModule,
      MatFormFieldModule,
      NgxMatSelectSearchModule,
      MatDialogModule,
      MatNativeDateModule,
      MatButtonModule,
      AgmCoreModule.forRoot({
          apiKey: ''
      })
    ],


    providers: [
        CallNodeJsService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AppHttpInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
