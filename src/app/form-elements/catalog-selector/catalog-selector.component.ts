import { AfterViewInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { Subject } from 'rxjs';
import { ReplaySubject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { ItemFloatingCharsCat } from 'src/app/_models/item-floating-char-cat';
import { ItemFloatingCharRel } from 'src/app/_models/item-floating-char-rel';

@Component({
  selector: 'app-catalog-selector',
  templateUrl: './catalog-selector.component.html',
  styleUrls: ['./catalog-selector.component.css']
})
export class CatalogSelectorComponent implements OnInit, AfterViewInit, OnDestroy {

  /** list of banks filtered by search keyword */
  public filteredBanks: ReplaySubject<ItemFloatingCharsCat[]> = new ReplaySubject<ItemFloatingCharsCat[]>(1);
  protected _onDestroy = new Subject<void>();

  @ViewChild('singleSelect', { static: false })
  singleSelect: MatSelect;
  
  constructor() { }

  ngOnInit() {
    // listen for search field value changes
    this.searchBarFormGroup.valueChanges
    .pipe(takeUntil(this._onDestroy))
    .subscribe(() => {
      this.filterBanks();
    });
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
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

  public searchBarFormGroup: FormControl = new FormControl();

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

  ngAfterViewInit() {
    this.setInitialValue();
  }

  protected setInitialValue() {
    this.filteredBanks
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        // setting the compareWith property to a comparison function
        // triggers initializing the selection according to the initial value of
        // the form control (i.e. _initializeSelection())
        // this needs to be done after the filteredBanks are loaded initially
        // and after the mat-option elements are available
        console.log(this.singleSelect);
        this.singleSelect.compareWith = (a: ItemFloatingCharsCat, b: ItemFloatingCharsCat) => a && b && a.charId === b.charId;
      });
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

  protected filterBanks() {
    if (!this.itemFloatingChar) {
      return;
    }
    // get the search keyword
    let search = this.searchBarFormGroup.value;
    
    if (!search) {
      this.filteredBanks.next(this.itemFloatingChar.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredBanks.next(
      this.itemFloatingChar.filter(bank => bank.charName.toLowerCase().indexOf(search) > -1)
    );
    console.log("2 search: ", this.filteredBanks);
  }

}
