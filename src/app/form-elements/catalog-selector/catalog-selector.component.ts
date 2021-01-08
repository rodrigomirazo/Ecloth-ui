import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ItemFloatingCharsCat } from 'src/app/_models/item-floating-char-cat';
import { ItemFloatingCharRel } from 'src/app/_models/item-floating-char-rel';

@Component({
  selector: 'app-catalog-selector',
  templateUrl: './catalog-selector.component.html',
  styleUrls: ['./catalog-selector.component.css']
})
export class CatalogSelectorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  @Input()
  tittlaCase: boolean;

  @Input()
  inputTitle: string;
  
  @Input()
  itemFloatingChar: ItemFloatingCharsCat[];

  @Input()
  itemFloatingCharRel: ItemFloatingCharRel;

  @Input()
  inputFormName: string;
  
  @Input()
  parentFormGroup: FormGroup;

  sortBy(itemFloatingChar: string) {
    return 
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.itemFloatingCharRel) {

      if(changes.itemFloatingChar) {
        this.itemFloatingChar = changes.itemFloatingChar.currentValue;

        this.itemFloatingChar = this.itemFloatingChar
        .sort( (a, b) => a.charName > b.charName ? 1 : -1);
      }
      if(changes.itemFloatingCharRel) {
        this.itemFloatingCharRel = changes.itemFloatingCharRel.currentValue;
      }
      if(changes.inputTitle) {
        this.inputTitle = changes.inputTitle.currentValue;
      }
      
    }
  }

  selectFloatingChar(event: any) {
    
    this.itemFloatingCharRel.floatingCharCatId;
    let floatCharFiltered: ItemFloatingCharsCat[] = this.itemFloatingChar
      .filter( floatChar => floatChar.charId == this.itemFloatingCharRel.floatingCharCatId );
    
    if(floatCharFiltered.length != 0) {
      this.itemFloatingCharRel.floatingCharCatName = floatCharFiltered[0].charName;
    } else {
      this.itemFloatingCharRel.floatingCharCatName = null;
    }
  }

}
