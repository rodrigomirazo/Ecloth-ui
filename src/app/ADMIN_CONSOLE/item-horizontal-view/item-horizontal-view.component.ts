import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category-tree/category.service';
import { ItemFloatingCharRel } from 'src/app/_models/item-floating-char-rel';
import { ItemTransactionJson } from 'src/app/_models/Item-transaction-model-json';
import { ItemCategoryModel } from 'src/app/_models/main-categories-model';

@Component({
  selector: 'item-horizontal-view',
  templateUrl: './item-horizontal-view.component.html',
  styleUrls: ['./item-horizontal-view.component.css']
})
export class ItemHorizontalViewComponent implements OnInit {

  @Input()
  public itemTransaction: any;

  @Input()
  public itemType: ItemCategoryModel[];
  
  constructor(
  ) { }

  ngOnInit(): void {
    console.log("itemType", this.itemType);
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

}
