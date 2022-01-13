import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-generic-message',
  templateUrl: './generic-message.component.html',
  styleUrls: ['./generic-message.component.css']
})
export class GenericMessageComponent implements OnInit {
 
  constructor(public dialogRef: MatDialogRef<GenericMessageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log(this.data)
    }

    
  onNoClick(): void {
    this.dialogRef.close();

  }


  ngOnInit() {
    console.log(this.data);
  }

}