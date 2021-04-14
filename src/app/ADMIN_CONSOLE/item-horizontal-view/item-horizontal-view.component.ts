import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/category-tree/category.service';
import { TRANSACT_STATUS_CLIENT_AUTHORIZATION, TRANSACT_STATUS_RECEIVED_TO_BUYER, TRANSACT_STATUS_SENT_TO_BUYER, TRANSACT_STATUS_SERVICED_COMPLETED, WEB_SITE_PAYPAL_PERCENTAJE, WEB_SITE_TAX } from 'src/app/_helpers/constants';
import { ItemFloatingCharRel } from 'src/app/_models/item-floating-char-rel';
import { ItemTransactionJson } from 'src/app/_models/Item-transaction-model-json';
import { ItemCategoryModel } from 'src/app/_models/main-categories-model';
import { ItemTransactionService } from 'src/app/_services/item-transaction.service';
import { ItemService } from 'src/app/_services/item.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'item-horizontal-view',
  templateUrl: './item-horizontal-view.component.html',
  styleUrls: ['./item-horizontal-view.component.css']
})
export class ItemHorizontalViewComponent implements OnInit {

  @Input()
  public shopDetailButton: boolean;
  @Input()
  public itemTransaction: any;

  // Columns and Header
  @Input() public itemType: ItemCategoryModel[];
  @Input() public rowHeader: boolean;
  @Input() public dateAndIdColumn: boolean;
  
  // Diagnost
  @Input() public diagnostCommentInput: boolean;
  @Input() public diagnostCommentComplete: boolean;
  public diagnostComment: string;
  public itemApproved: boolean = false;
  public diagnosted: boolean = false;

  // Admin Sales
  @Input() public serviceColumn: boolean;
  public service: boolean;
  public sent: boolean;
  public received: boolean;
  public trackerCompany: string;
  public trackingNumber: string;
  public transactionStatus: string;
  public uploadedImgDir: string = environment.uploadedImgDir;
  public server: string = environment.server;

  // Sales
  @Input() public paymentDetails: boolean;

  constructor(
    private itemService: ItemService,
    private itemTransactService: ItemTransactionService,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {

    this.service        = this.itemTransaction.service;
    this.sent           = this.itemTransaction.sent;
    this.received       = this.itemTransaction.recieved;
    this.trackingNumber = this.itemTransaction.trackingNumber;
    this.trackerCompany = this.itemTransaction.trackerCompany;
    this.transactionStatus = this.itemTransaction.transactionStatus;
  }

  filterItemType(type: number) : string {
    if(!type) {
      return "";
    }
    
    const filterType = this.itemType.filter( typeCat => typeCat.id == type);

    if(filterType.length > 0) {
      return filterType[0].subCategoryName;
    } else {
      return "NA";
    }
  }

  filterCatalog(floatingCharName: string): string {
    
    let charFiltered: any[]  =
    this.itemTransaction.item.itemFloatingChars.filter( floatChar => floatChar.floatingCharName == floatingCharName);

    if(charFiltered.length > 0) {
      return charFiltered[0].floatingCharCatName;
    } else {
      return "NA";
    }
  }

  dateFormat(date: string) {
    return new Date(date);
  }

  sendDiagnosist() {
    console.log("this.diagnostComment", this.diagnostComment);
    console.log("itemApproved", this.itemApproved);
    this.diagnosted = true;

    this.itemService.diagnost(
      this.itemTransaction.item.id, this.itemApproved,
      this.diagnostComment
    ).subscribe( (resp: any) => {
      this.diagnosted = true;
      this.openSnackBar("Diagnostico Enviado", "Deshacer");
    });
  }

  sendServiceFlow() {
    console.log("this.diagnostComment", this.diagnostComment);
    console.log("itemApproved", this.itemApproved);
    this.diagnosted = true;

    this.itemTransactService.serviceFlow(
      this.itemTransaction.id, this.transactionStatus,
      this.service, this.sent, this.received, this.trackerCompany, this.trackingNumber
    ).subscribe( (resp: any) => {
      this.diagnosted = true;
      this.openSnackBar("Actualizado para item " + this.itemTransaction.item.id, "Deshacer");
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  webSiteComission() {
    if( this.itemTransaction.item.price < 20000) {
      return .15 * this.itemTransaction.item.price;
    } else if (this.itemTransaction.item.price >= 20000 && this.itemTransaction.item.price < 50000) {
      return .12 * this.itemTransaction.item.price;
    } else if (this.itemTransaction.item.price >= 50000 && this.itemTransaction.item.price < 100000) {
      return .10 * this.itemTransaction.item.price;
    } else { // >= 100, 000
      return .08;
    }
  }

  webSiteTax() : number {
    return this.itemTransaction.item.price * WEB_SITE_TAX;
  }

  paypalComission() : number {
    return this.itemTransaction.item.price * WEB_SITE_PAYPAL_PERCENTAJE;
  }

  itemTransactionTotal() : number {
    let total =
    this.itemTransaction.totalPayment   -
      2000 -
      this.webSiteComission() -
      this.paypalComission();

    return total;
  }

  onCheckService() {
    this.sent = false;
    this.received = false;
    if(this.service == false) {
      this.transactionStatus = TRANSACT_STATUS_CLIENT_AUTHORIZATION;
    } else {
      this.transactionStatus = TRANSACT_STATUS_SERVICED_COMPLETED;
    }
  }

  onCheckSent() {
    this.received = false;

    if(this.sent == false) {
      this.transactionStatus = TRANSACT_STATUS_SERVICED_COMPLETED;
    } else {
      this.transactionStatus = TRANSACT_STATUS_SENT_TO_BUYER;
    }
  }

    onCheckReceived() {
    if(this.received == false) {
      this.transactionStatus = TRANSACT_STATUS_SENT_TO_BUYER;
    } else {
      this.transactionStatus = TRANSACT_STATUS_RECEIVED_TO_BUYER;
    }
  }
  

}
