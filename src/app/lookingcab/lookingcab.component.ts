import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { CallNodeJsService } from '../callnodejs.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { MydialogComponent } from '../mydialog/mydialog.component';
import { PaymentDialogComponent } from '../payment-dialog/payment-dialog.component';


@Component({
  selector: 'app-lookingcab',
  templateUrl: './lookingcab.component.html',
  styleUrls: ['./lookingcab.component.css']
})
export class LookingcabComponent implements OnInit {

    constructor(private router: Router, private route: ActivatedRoute, private callNodeJsService: CallNodeJsService, private spinner: NgxSpinnerService, private dialog: MatDialog) { }

    locationData: any;
    getCab: any;

    paytmParent: string = "Cash";

    //@Input() PaytmTrue: string = "Cash";
    //@Input('PaytmTrue') PaytmTrue: string = "Cash";

    //@Output() PaytmTrue = new EventEmitter<string>(); // : string = "Cash";

    //@Output() paymentSelect = new EventEmitter<any>();

    cabAvailableData: any;
    LocationName: string;
    //locationSearch: FormGroup;
    pickupName: string;
    destinationName: string;
    //values = '';
    //Destination = '';
    public isCash: boolean = true;
    addNewCab: any;;

    receiveMethodParent(value: string) {
        console.log(value);
        this.paytmParent = value;
    }

    //public receiveMethodParent(value): void {
    //    console.log('Picked date: ', value);
    //}

    //getLocationByKey(event: KeyboardEvent) {
    //    this.values = '';
    //    if (event) {
    //        this.callNodeJsService.getLocation(event).subscribe((data: any) => {
    //            for (let i = 0; i < data.length; i++) {
    //                this.values += (data[i]['LocationName']) + ' | '
    //            }
    //        });
    //        //this.values = (data[0]['LocationName']) + ' | ');
    //    }
    //}

    public getLocation = function () {
        this.callNodeJsService.getLocation().subscribe((data: any) => this.locationData = data);
        //console.log(this.locationData);
    }


    //getDestinationLocation(event: KeyboardEvent) {
    //    this.Destination = '';
    //    if (event) {
    //        this.callNodeJsService.getLocationKey(event).subscribe((data: any) => {
    //            for (let i = 0; i < data.length; i++) {
    //                this.Destination += (data[i]['LocationName']) + ' | '
    //            }
    //        });
    //    }
    //    //this.values = (data[0]['LocationName']) + ' | ');
    //}

    //public getCabAvailable = function () {
    //    this.callNodeJsService.getCabAvailable(this.locationData.value).subscribe((data: any) => this.cabAvailableData = data);
    //    console.log(this.cabAvailableData);
    //}

    public getCabAvailable = function (getCab) {
        this.callNodeJsService.getCabAvailable(getCab).subscribe((data: any) => {
            this.cabAvailableData = data;
        });
    }

    callPickup(value) {
        this.pickupName = value;
        this.getCab = {
            pickupName: this.pickupName,
            destinationName: this.destinationName
        }
        window.localStorage.setItem('FromLocation', this.pickupName);
        this.getCabAvailable(this.getCab);
    }

    callDestination(value) {
        this.destinationName = value;
        this.getCab = {
            pickupName: this.pickupName,
            destinationName: this.destinationName
        }
        window.localStorage.setItem('ToLocation', this.destinationName);
        this.getCabAvailable(this.getCab);
    }

    bookUberAuto = function () {
        this.addNewCab = {
            Price: this.cabAvailableData[0]['TotalAmount'],
            FromLocation: this.pickupName,
            ToLocation: this.destinationName
        }
        this.callNodeJsService.addCabDeatils(this.addNewCab).subscribe(() => {
        });
        this.router.navigateByUrl('/bookcab');
    };

    openDialog() {
        const dialogRef = this.dialog.open(MydialogComponent, {
        });

        dialogRef.afterClosed().subscribe(result => {
            var SelectValue = window.localStorage.getItem('cashType');
            this.paytmParent = SelectValue;
            if (this.paytmParent == "Cash") {
                this.isCash = true;
            }
            else {
                this.isCash = false;
            }
        });
       

    };

    ngOnInit(): void {

        this.spinner.show();
        setTimeout(() => {
            this.getLocation();
            this.spinner.hide();
        }, 5000);

        //this.locationSearch = new FormGroup({
        //    CabType: new FormControl()
        //})
        //this.route.paramMap.subscribe(
        //    (params: ParamMap) => {
        //        console.log(window.localStorage.getItem('SelectValue'));
        //        //this.paytmParent = parseInt(params.get('PaytmTrue'));
        //    })
        window.localStorage.setItem('cashType', this.paytmParent);
     
  }

}

