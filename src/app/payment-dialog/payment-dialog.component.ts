import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment-dialog',
  templateUrl: './payment-dialog.component.html',
  styleUrls: ['./payment-dialog.component.css']
})
export class PaymentDialogComponent implements OnInit {

    public PaytmTrue: string = "Cash";
    public CashTrue: string = "Cash";

    @Output() receivePaytm = new EventEmitter();

    constructor(private router: Router, private dialogRef: MatDialogRef<PaymentDialogComponent>, private dialog: MatDialog, private fb: FormBuilder) { }

    ngOnInit(): void {
    }

    savePaytm(value) {
        if (value == true) {
            this.PaytmTrue = 'Paytm';

        }
        window.localStorage.setItem('cashType', this.PaytmTrue);

        this.dialog.closeAll();
    }

    saveCash(value) {
        if (value == true) {
            this.CashTrue = 'Cash';

        }
        window.localStorage.setItem('cashType', this.CashTrue);

        this.dialog.closeAll();
    }

    close() {
        this.dialogRef.close();
    }
}
