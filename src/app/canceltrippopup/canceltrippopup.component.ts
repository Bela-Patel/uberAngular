import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-canceltrippopup',
  templateUrl: './canceltrippopup.component.html',
  styleUrls: ['./canceltrippopup.component.css']
})
export class CanceltrippopupComponent implements OnInit {

    constructor(private router: Router, private dialog: MatDialog, private dialogRef: MatDialogRef<CanceltrippopupComponent>) { }


    btnYesClick = function () {
      this.dialogRef.close();
      this.router.navigateByUrl('/lookingcab');
    };

    btnNoClick = function () {
        this.dialogRef.close();
    };

  ngOnInit(): void {
  }

}
