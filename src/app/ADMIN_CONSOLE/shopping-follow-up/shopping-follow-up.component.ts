import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { TRANSACT_STATUS_AFTER_TRANSACTION_APPROVED_AND_AUTHORIZED, TRANSACT_STATUS_RECEIVED_TO_BUYER, TRANSACT_STATUS_SENT_TO_BUYER, TRANSACT_STATUS_SERVICED_COMPLETED } from 'src/app/_helpers/constants';
import { ItemFloatingCharRel } from 'src/app/_models/item-floating-char-rel';
import { ItemTransactionJson } from 'src/app/_models/Item-transaction-model-json';
import { ItemCategoryModel } from 'src/app/_models/main-categories-model';
import { User } from 'src/app/_models/User-model';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { ItemTransactionService } from 'src/app/_services/item-transaction.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'shopping-follow-up',
  templateUrl: './shopping-follow-up.component.html',
  styleUrls: ['./shopping-follow-up.component.css']
})
export class ShoppingFollowUpComponent implements OnInit, AfterViewInit {

  @Input()
  public itemId: number;
  @Input()
  public itemType: ItemCategoryModel[];

  @ViewChild('stepper')
  public stepper: MatStepper;

  public currentStep: number = 0;
  public transaction: any;
  public user: User;
  public uploadedImgDir: string = environment.uploadedImgDir;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(
    private authService: AuthenticationService,
    private itemTransactService: ItemTransactionService,
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.user = this.authService.getSessionUser();
    //TODO: get User sales
    this.itemTransactService.get(this.itemId).subscribe( (transactionResp: ItemTransactionJson) => {
      this.transaction = transactionResp;
      this.setStep();
    });

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  ngAfterViewInit(): void {
    
  }

  setStep() {

    console.log(this.transaction.transactionStatus);

    let stepIndex;
    if(this.transaction.transactionStatus == TRANSACT_STATUS_AFTER_TRANSACTION_APPROVED_AND_AUTHORIZED) {
      stepIndex = 0;
    } else if(this.transaction.transactionStatus == TRANSACT_STATUS_SERVICED_COMPLETED) {
      stepIndex = 1;
    } else if(this.transaction.transactionStatus == TRANSACT_STATUS_SENT_TO_BUYER) {
      stepIndex = 2;
    } else if(this.transaction.transactionStatus == TRANSACT_STATUS_RECEIVED_TO_BUYER) {
      stepIndex = 3;
    }

    for (let i = 0; i <= stepIndex; i++) {

      setTimeout(() => {
        this.currentStep = i;
        
      }, 30);
    }
  }

  dateFormat(date: string) {
    return new Date(date);
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

  filterCatalog(floatingCharName: string, itemFloatingChars: ItemFloatingCharRel[]): string {

    if(!itemFloatingChars) {
      return "NA";
    }
    let charFiltered: ItemFloatingCharRel[]  =
    itemFloatingChars.filter( floatChar => floatChar.floatingCharName == floatingCharName);

    if(charFiltered.length > 0) {
      return charFiltered[0].floatingCharCatName;
    } else {
      return "NA";
    }
  }
  
}
