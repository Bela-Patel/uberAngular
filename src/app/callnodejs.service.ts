import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CallNodeJsService {

    private headers: HttpHeaders;
    private head: HttpHeaders;

    private accessPointUrl: string = 'http://localhost:3000/cab';
    private tokenPointUrl: string = 'http://localhost:3000/Login';

    constructor(private http: HttpClient) {
        //this.head = new HttpHeaders({
        //    'Content-Type': 'application/json; charset=utf-8',
        //    'x-access-token': window.localStorage.getItem('access_token')
        //});
    }

    public login(payload) {
        return this.http.post(this.tokenPointUrl, payload, { headers: this.headers });
    }

    public getLocation() {
        return this.http.get(this.accessPointUrl + '/getLocation');
    }

    //public getLocationKey(LocatioName) {
    //        return this.http.get(this.accessPointUrl + '/getLocation/' + LocatioName);
    //}

    public getCabAvailable(payload) {
        return this.http.post(this.accessPointUrl + '/getAvailableCab' , payload);
    }

    public addCabDeatils(payload) {
        return this.http.post(this.accessPointUrl + '/insertCabDetails', payload);
    }

    public getCabDetails(payload) {
        return this.http.post(this.accessPointUrl + '/getCabDetails', payload);
    }

    public getTripDetails(payload) {
        return this.http.post(this.accessPointUrl + '/tripDetails', payload);
    }
}
