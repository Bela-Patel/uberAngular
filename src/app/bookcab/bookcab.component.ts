import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { CallNodeJsService } from '../callnodejs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CanceltrippopupComponent } from '../canceltrippopup/canceltrippopup.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PaymentDialogComponent } from '../payment-dialog/payment-dialog.component';

@Component({
  selector: 'app-bookcab',
  templateUrl: './bookcab.component.html',
  styleUrls: ['./bookcab.component.css']
})
export class BookcabComponent implements OnInit {

    constructor(private router: Router, private spinner: NgxSpinnerService, private callNodeJsService: CallNodeJsService, private dialog: MatDialog) { }

    cabData: any;
    getLocation: any;
    public isCash: boolean = true;
    paytmParent: string = "Cash";

    public getCabDetails = function (getLocation) {
        var fromLocation = window.localStorage.getItem('FromLocation');
        var toLocation = window.localStorage.getItem('ToLocation');
        this.getLocation = {
            FromLocation: fromLocation,
            ToLocation: toLocation
        }
        var SelectValue = window.localStorage.getItem('cashType');
        this.paytmParent = SelectValue;
        if (this.paytmParent == "Cash") {
            this.isCash = true;
        }
        else {
            this.isCash = false;
        }
        this.callNodeJsService.getCabDetails(this.getLocation).subscribe((data: any) => this.cabData = data);
    }

    cancelUberAuto = function () {
        const dialogRef = this.dialog.open(CanceltrippopupComponent, {
        });

        dialogRef.afterClosed().subscribe(result => { });
    };

    ngOnInit(): void {
        this.spinner.show();
        setTimeout(() => {
            this.getCabDetails(this.getLocation);
            this.spinner.hide();
        }, 5000);
  }

}
