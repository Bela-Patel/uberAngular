import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormsModule } from '@angular/forms';
import { CallNodeJsService } from '../callnodejs.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

    constructor(private router: Router, private callNodeJsService: CallNodeJsService) { }

    loginData: FormGroup;

    public uberUserData: any;

      ngOnInit(): void {
          this.loginData = new FormGroup({
              MobileNumber: new FormControl()
          })
      }

      numberOnly(event): boolean {
          const charCode = (event.which) ? event.which : event.keyCode;
          if (charCode > 31 && (charCode < 48 || charCode > 57)) {
              return false;
          }
          return true;
      }

      public loginSubmit() {
          this.callNodeJsService.login(this.loginData.value).subscribe((res: any) => {
              if (this.loginData.value.MobileNumber != "" && res.jwtToken != "") {
                  this.uberUserData = res.Data;
                  window.localStorage.setItem('Data', this.uberUserData);
                  window.localStorage.setItem('access_token', res.jwtToken);
                  this.router.navigate(['/lookingcab']);
              }
              else {
                  window.alert('Invalid Mobile Number.');
                  window.localStorage.removeItem("access_token");
                  this.router.navigate(['/']);
              }
          });
      }

}
