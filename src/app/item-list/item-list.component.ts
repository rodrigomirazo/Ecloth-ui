import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { UserItem } from '../models/Item-user-model';
import { ItemService } from './item.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { InputFilter } from '../models/input-filter-model';
import { FloatingCharsService } from '../floating-chars/floating-chars.service';
import { ItemFloatingChars } from '../models/item-floating-char';
import { ItemFloatingCharsCat } from '../models/item-floating-char-cat';

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
    console.log("SET inputFilter");
    this._inputFilter = value;
    this.resquestItems();
  }

  /**
   * @description This Function requests the List of Items based on current Input Filters
   */
  resquestItems() {

    this.floatingCharsService.getAll().subscribe( (itemFloatingChars: ItemFloatingChars[]) => {

      this.itemService.getFilterItems(this.inputFilter).subscribe((itemsResp: UserItem[]) => {
        
        //console.log("itemsResp: ", itemsResp);
        this.items = itemsResp;
        for (let i = 0; i < this.items.length; i++) {
          //console.log("for 1");
          this.items[i].$itemFloatingChars;

          if(this.items[i].$itemFloatingChars) {
            for (let j = 0; j < this.items[i].$itemFloatingChars.length; j++) {

              // a) find "Float Char"
              const floatChar = itemFloatingChars.filter(floatChar => floatChar.floatingCharId == this.items[i].$itemFloatingChars[j].$floatingCharId );
              // b) find "Float Char Value"
              let floatCharCat: ItemFloatingCharsCat[] = [];

              // c) verify if Char was found
              if(floatChar.length > 0)
                floatCharCat = floatChar[0].catalogList.filter(floatCatChar => floatCatChar.charId == this.items[i].$itemFloatingChars[j].$floatingCharCatId );
              
              //console.log("\nfloatChar: ", floatChar);
              //console.log("floatCharCat: ", floatCharCat);
              // d) assign using validations
              this.items[i].$itemFloatingChars[j].$floatingCharName = (floatChar.length > 0) ? floatChar[0].floatingCharName : "N/A";
              this.items[i].$itemFloatingChars[j].$floatingCharCatName = (floatCharCat.length > 0) ? floatCharCat[0].charName : "N/A";
              
              //console.log("this.items: ", this.items[i]);
            }
          }
        }
      });
    });
  }
  
}
