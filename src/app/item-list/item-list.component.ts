import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { UserItem } from '../models/Item-user-model';
import { ItemService } from './item.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { InputFilter } from '../models/input-filter-model';
import { FloatingCharsService } from '../floating-chars/floating-chars.service';
import { ItemFloatingChars } from '../models/item-floating-char';
import { ItemFloatingCharsCat } from '../models/item-floating-char-cat';
import { ItemFloatingCharRel } from '../models/item-floating-char-rel';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {


  // IO
  //@Input() categoryId: number;
  private _inputFilter: any;
  private _changeIncrement: number;

  private items: UserItem[];

  constructor(
    private itemService: ItemService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private floatingCharsService: FloatingCharsService,
    ) {
    this.matIconRegistry.addSvgIcon("star_inactive",
    this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/market-place/icon_star_inactive.svg") );
    
    this.matIconRegistry.addSvgIcon("star_active",
    this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/market-place/icon_star_active.svg") );
    
  }

  ngOnInit() {
    
  }

  /** Detect Changes */
  @Input()
  public get changeIncrement(): number {
    return this._changeIncrement;
  }
  
  public set changeIncrement(value: number) {
    console.log("set changeIncrement");
    this._changeIncrement = value;
    this.resquestItems();
  }

  /** Handle Events for Item Category */
  @Input()
	public get inputFilter(): InputFilter {
		return this._inputFilter;
  }

	public set inputFilter(value: InputFilter) {
    this._inputFilter = value;
    this.resquestItems();
  }

  filterItemType(type: number) : string {
    if(!type) {
      return "";
    }
    
    const filterType = this.inputFilter.itemTypes.filter( typeCat => typeCat.id == type);

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

  /**
   * @description This Function requests the List of Items based on current Input Filters
   */
  resquestItems() {

    this.floatingCharsService.getAll().subscribe( (itemFloatingChars: ItemFloatingChars[]) => {

      if(this.inputFilter.itemTypes) {
        if(this.inputFilter.itemTypes.length > 0) {
          this.itemService.getFilterItems(this.inputFilter).subscribe((itemsResp: any[]) => {
              
            this.items = itemsResp;
            for (let i = 0; i < this.items.length; i++) {

              if(this.items[i].itemFloatingChars) {
                for (let j = 0; j < this.items[i].itemFloatingChars.length; j++) {
                  //console.log(this.items[i].itemFloatingChars[j]);

                  // a) find "Float Char"
                  let floatChar: ItemFloatingChars[] = itemFloatingChars.filter(floatChar => floatChar.floatingCharId == this.items[i].itemFloatingChars[j].floatingCharId );
                  // b) find "Float Char Value"
                  let floatCharCat: ItemFloatingCharsCat[] = [];

                  // c) verify if Char was found
                  if(floatChar.length > 0 && itemsResp[i].itemFloatingChars[j].floatingCharsCatId) {
                    //console.log("\n floatChar.length", floatChar[0].catalogList, " VS ", itemsResp[i].itemFloatingChars[j].floatingCharsCatId);
                    floatCharCat = floatChar[0].catalogList.filter(floatCatChar => floatCatChar.charId == this.items[i].itemFloatingChars[j].floatingCharCatId );
                  }
                  
                  //console.log("floatCharCat: ", floatCharCat[0], floatChar[0]);
                  // d) assign using validations
                  this.items[i].itemFloatingChars[j].floatingCharName = (floatChar.length > 0) ? floatChar[0].floatingCharName : "N/A";
                  this.items[i].itemFloatingChars[j].floatingCharCatName = (floatCharCat.length > 0) ? floatCharCat[0].charName : "N/A";
                }
              }
            }
          });
        }
      }
    });
  }
  
}
