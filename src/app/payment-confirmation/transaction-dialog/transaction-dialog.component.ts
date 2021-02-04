import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { GenericDialogComponent } from 'src/app/generic-dialog/generic-dialog.component';

@Component({
  selector: 'app-transaction-dialog',
  templateUrl: './transaction-dialog.component.html',
  styleUrls: ['./transaction-dialog.component.css']
})
export class TransactionDialogComponent implements OnInit {
 
  constructor(public dialogRef: MatDialogRef<GenericDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log(this.data)
    }

    
  onNoClick(): void {
    console.log("si entre");
    this.dialogRef.close();

  }


  ngOnInit() {
    console.log(this.data)
  }

}
