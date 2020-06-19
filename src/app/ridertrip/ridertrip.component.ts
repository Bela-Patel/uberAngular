import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CallNodeJsService } from '../callnodejs.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ridertrip',
  templateUrl: './ridertrip.component.html',
  styleUrls: ['./ridertrip.component.css']
})

//export const FilterTrip: RidertripComponent[] = [
//        { id: 1, name: 'June (This Month)' },
//        { id: 2, name: 'March' },
//        { id: 3, name: 'All Trips' }
//];

export class RidertripComponent implements OnInit {

    constructor(private spinner: NgxSpinnerService, private callNodeJsService: CallNodeJsService, private router: Router, private route: ActivatedRoute) { }

    tripData: any;
    month: any;
    detailTrip: any[] = [];
   // : any;
    //filtertrip: any;

    public monthName: string = "";
    public isSelected: string = "";
    public isShow: boolean = false;
    public isNoFilterData: boolean = false;
    public isMinus: boolean = false;
    public isDivFiltertrip: boolean = false;

    filtertrip: string[] = ['June (This Month)','May(Last Month)', 'April' ,'March', 'All Trips'];

    public getTripDetails = function (month) {
        month = {
            DateTime: this.monthName
        }
        this.callNodeJsService.getTripDetails(month).subscribe((data: any) => this.tripData = data);
        //console.log(this.locationData);
    }

    openTripDiv(item) {
        this.isSelected = item.TripDetailsId;
        this.isMinus = true;
        this.isShow = true;
    };

    closeTripDiv(item) {
        this.isSelected = item.TripDetailsId;
        this.isMinus = false;
        this.isShow = false;
    };

    openDivFilterTrip() {
        this.isDivFiltertrip = true;
    };

    detailClick(item) {
        this.detailTrip = item;
        this.router.navigate(['/detailmytrip'], { queryParams: this.detailTrip });
    };

    getDivFilterTrip(value: string): void {
        this.isDivFiltertrip = false;
        if (value == "June (This Month)") {
            this.monthName = "June";
            this.isNoFilterData = false;
        }
        else if (value == "All Trips") {
            this.monthName = "";
            this.isNoFilterData = false;
        }
        else if (value == "May(Last Month)" || value == "April") {
            this.isNoFilterData = true;
        }
        else {
            this.monthName = value;
            this.isNoFilterData = false;
        }
        this.getTripDetails(this.month);
    }



    ngOnInit(): void {
        this.spinner.show();
        setTimeout(() => {
            this.getTripDetails(this.month);
            this.spinner.hide();
        }, 5000);
  }

}
