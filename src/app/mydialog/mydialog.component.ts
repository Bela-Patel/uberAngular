import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { PaymentDialogComponent } from '../payment-dialog/payment-dialog.component';

@Component({
  selector: 'app-mydialog',
  templateUrl: './mydialog.component.html',
  styleUrls: ['./mydialog.component.css']
})
export class MydialogComponent implements OnInit {

    form: FormGroup;
    //description: string;

    constructor(
        //private Mat: MatFormFieldModule,

        private dialogRef: MatDialogRef<MydialogComponent>, private dialog: MatDialog) {}
        //@Inject(MAT_DIALOG_DATA) data) {
        //this.PaytmTrue = data.PaytmTrue;
        //console.log(data.PaytmTrue);

    //}

    ngOnInit() {
    }


    close() {
        this.dialogRef.close();
    }

    paymentMethod() {
        const dialogRef = this.dialog.open(PaymentDialogComponent, {
        });
        dialogRef.afterClosed().subscribe();
    }

}
