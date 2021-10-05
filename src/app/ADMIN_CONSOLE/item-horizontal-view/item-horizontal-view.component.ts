import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/category-tree/category.service';
import { TRANSACT_STATUS_AFTER_TRANSACTION_APPROVED, TRANSACT_STATUS_AFTER_TRANSACTION_APPROVED_AND_AUTHORIZED, TRANSACT_STATUS_CLIENT_AUTHORIZATION, TRANSACT_STATUS_RECEIVED_TO_BUYER, TRANSACT_STATUS_SENT_TO_BUYER, TRANSACT_STATUS_SERVICED_COMPLETED, WEB_SITE_PAYPAL_PERCENTAJE, WEB_SITE_TAX } from 'src/app/_helpers/constants';
import { ItemComissionsService } from 'src/app/_helpers/item-comissions.service';
import { ItemFloatingCharRel } from 'src/app/_models/item-floating-char-rel';
import { ItemImgUrls } from 'src/app/_models/Item-img-urls-model';
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
  public authorize: boolean;
  public service: boolean;
  public sent: boolean;
  public received: boolean;
  public trackerCompany: string;
  public trackingNumber: string;
  public transactionStatus: string;
  public uploadedImgDir: string = environment.uploadedImgDir;
  public server: string = environment.server;

  // Comissions
  public serviceCommision: number;
  public webSiteCommision: number;
  public webSiteTax: number;
  public paypalComission: number;
  public itemTransactionTotal: number;
  public itemTransactionTotalVendor: number;
  
  // Sales
  @Input() public paymentDetails: boolean;

  constructor(
    private itemService: ItemService,
    private itemTransactService: ItemTransactionService,
    private _snackBar: MatSnackBar,
    private itemComission: ItemComissionsService,
  ) { }

  ngOnInit(): void {

    if ( this.itemTransaction.transactionStatus == TRANSACT_STATUS_AFTER_TRANSACTION_APPROVED ||
      this.itemTransaction.transactionStatus == TRANSACT_STATUS_AFTER_TRANSACTION_APPROVED_AND_AUTHORIZED) {
        this.authorize = false;
    } else {
      this.authorize = true;
    }
    this.service        = this.itemTransaction.service;
    this.sent           = this.itemTransaction.sent;
    this.received       = this.itemTransaction.recieved;
    this.trackingNumber = this.itemTransaction.trackingNumber;
    this.trackerCompany = this.itemTransaction.trackerCompany;
    this.transactionStatus = this.itemTransaction.transactionStatus;

    this.serviceCommision = this.itemComission.serviceCommision();
    this.webSiteTax = this.itemComission.webSiteTax(this.itemTransaction.item.price);
    this.paypalComission = this.itemComission.paypalComission(this.itemTransaction.item.price);
    this.webSiteCommision = this.itemComission.webSiteComission(this.itemTransaction.item.price);
    this.itemTransactionTotal = this.itemComission.itemTransactionTotal(this.itemTransaction.item.price);
    this.itemTransactionTotalVendor = this.itemComission.itemTransactionTotalVendor(this.itemTransaction.item.price);

    this.itemTransaction.item.itemImgUrls.sort(function(a: ItemImgUrls, b: ItemImgUrls) {
      return a.imgUrl.localeCompare(b.imgUrl);
    });
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

  onCheckAuthorize() {
    this.sent = false;
    this.received = false;
    this.service = false;

    if(this.authorize == false) {
      this.transactionStatus = TRANSACT_STATUS_AFTER_TRANSACTION_APPROVED;
    } else {
      this.transactionStatus = TRANSACT_STATUS_CLIENT_AUTHORIZATION;
    }
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
