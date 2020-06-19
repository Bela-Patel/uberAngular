import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailmytrip',
  templateUrl: './detailmytrip.component.html',
  styleUrls: ['./detailmytrip.component.css']
})
export class DetailmytripComponent implements OnInit {

    //tripData: any;
    tripData: any;

    constructor(private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.queryParams.subscribe(param => {
            this.tripData = param;
        });

        //this.tripData;

        //this.route.paramMap.subscribe(
        //    (params: ParamMap) => {
        //        console.log(window.localStorage.getItem('SelectValue'));
        //        //this.paytmParent = parseInt(params.get('PaytmTrue'));
        //    })
    }

}
