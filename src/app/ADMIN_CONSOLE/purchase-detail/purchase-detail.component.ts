import { Component, Input, OnInit } from '@angular/core';
import { ItemFloatingCharRel } from 'src/app/_models/item-floating-char-rel';
import { ItemTransactionJson } from 'src/app/_models/Item-transaction-model-json';
import { ItemCategoryModel } from 'src/app/_models/main-categories-model';
import { User } from 'src/app/_models/User-model';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { ItemTransactionService } from 'src/app/_services/item-transaction.service';

@Component({
  selector: 'purchase-detail',
  templateUrl: './purchase-detail.component.html',
  styleUrls: ['./purchase-detail.component.css']
})
export class PurchaseDetailComponent implements OnInit {

  @Input()
  public transactionId: number;
  @Input()
  public itemType: ItemCategoryModel[];

  public transaction: any;
  public user: User;

  constructor(
    private itemTransactService: ItemTransactionService,
    private authService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    this.user = this.authService.getSessionUser();
    //TODO: get User sales
    console.log(this.transactionId);
    this.itemTransactService.get(this.transactionId).subscribe( (transactionResp: ItemTransactionJson) => {
      this.transaction = transactionResp;
    });
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

  filterCatalog(floatingCharName: string): string {
    
    let charFiltered: any[]  =
    this.transaction.item.itemFloatingChars
      .filter( floatChar => floatChar.floatingCharCatName == floatingCharName);
    
    if(charFiltered.length > 0) {
      return charFiltered[0].floatingCharName;
    } else {
      return "NA";
    }
  }
}
