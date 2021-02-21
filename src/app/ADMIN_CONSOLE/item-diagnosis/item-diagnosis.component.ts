import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { FloatingCharsService } from 'src/app/floating-chars/floating-chars.service';
import { UserItem } from 'src/app/_models/Item-model';
import { ItemTransactionJson } from 'src/app/_models/Item-transaction-model-json';
import { ItemCategoryModel } from 'src/app/_models/main-categories-model';
import { User } from 'src/app/_models/User-model';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { ItemTransactionService } from 'src/app/_services/item-transaction.service';
import { ItemService } from 'src/app/_services/item.service';

@Component({
  selector: 'item-diagnosis',
  templateUrl: './item-diagnosis.component.html',
  styleUrls: ['./item-diagnosis.component.css']
})
export class ItemDiagnosisComponent implements OnInit {

  @Input()
  public itemType: ItemCategoryModel[];
  
  public itemsTranaction: ItemTransactionJson[];
  public items: UserItem[];
  private user: User;

  public diagnostFilter: string;
  private approved: boolean;
  private startDate: Date;
  private endDate: Date;

  pageEvent: PageEvent;

  constructor(
    private authService: AuthenticationService,
    private itemService: ItemService,
    private floatingCharsService: FloatingCharsService,
  ) { }

  ngOnInit(): void {

    this.diagnostFilter = "notReviewed";

    this.startDate = new Date();
    this.endDate = new Date();

    this.pageEvent = new PageEvent();
    this.pageEvent.pageIndex = 0;
    this.pageEvent.pageSize = 6;
    this.pageEvent.length = 100;

    this.startDate.setMonth(this.startDate.getMonth()-6);

    this.user = this.authService.getSessionUser();
    //TODO: get transactions for admins
    this.itemsNotYetApproved();

  }

  itemsNotYetApproved() {

    console.log(this.diagnostFilter);
    if ( this.diagnostFilter === "notReviewed" ) {
      console.log("notReviewed");
      this.itemService.notYetApproved(this.startDate, this.endDate, this.pageEvent.pageIndex, this.pageEvent.pageSize).subscribe( (itemsResp: UserItem[]) => {
        this.items = itemsResp;
        this.pageEvent.length = itemsResp.length;
      });
    } else if(this.diagnostFilter === "accepted") {
      console.log("accepted");
      this.itemService.approvedOrRejected( true, this.startDate, this.endDate, this.pageEvent.pageIndex, this.pageEvent.pageSize).subscribe( (itemsResp: UserItem[]) => {
        this.items = itemsResp;
        this.pageEvent.length = itemsResp.length;
      });
    } else if(this.diagnostFilter === "rejected") {
      console.log("rejected");
      this.itemService.approvedOrRejected( false, this.startDate, this.endDate, this.pageEvent.pageIndex, this.pageEvent.pageSize).subscribe( (itemsResp: UserItem[]) => {
        this.items = itemsResp;
        this.pageEvent.length = itemsResp.length;
      });
    }
    
  }

  changePage() {

  }

  getStartDate($event) {
    this.startDate = new Date($event.start);
    this.endDate = new Date($event.end);
    this.itemsNotYetApproved();

    console.log( new Date($event.start).toLocaleDateString() );
  }

  tranasactionWrapper(item: any) {
    return {
      item: item
    }
  }

}
