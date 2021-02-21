import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/category-tree/category.service';
import { ItemFloatingCharRel } from 'src/app/_models/item-floating-char-rel';
import { ItemTransactionJson } from 'src/app/_models/Item-transaction-model-json';
import { ItemCategoryModel } from 'src/app/_models/main-categories-model';
import { ItemService } from 'src/app/_services/item.service';

@Component({
  selector: 'item-horizontal-view',
  templateUrl: './item-horizontal-view.component.html',
  styleUrls: ['./item-horizontal-view.component.css']
})
export class ItemHorizontalViewComponent implements OnInit {

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


  constructor(
    private itemService: ItemService,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    //console.log("itemType", this.itemType);
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

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

}
