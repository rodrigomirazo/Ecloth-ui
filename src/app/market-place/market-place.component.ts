import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CategoryService } from '../category-tree/category.service';
import { FloatingCharsService } from '../floating-chars/floating-chars.service';
import { ItemService } from '../item-list/item.service';
import { FloatingCharIdsSelected } from '../models/floating-char-Ids-selected';
import { InputFilter } from '../models/input-filter-model';
import { ItemFloatingChars } from '../models/item-floating-char';
import { ItemFloatingCharsCat } from '../models/item-floating-char-cat';
import { ItemSelectedFilters } from '../models/item-selected-filters';
import { ItemCategoryModel } from '../models/main-categories-model';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-market-place',
  templateUrl: './market-place.component.html',
  styleUrls: ['./market-place.component.css']
})
export class MarketPlaceComponent implements OnInit {

  private inputFilter: InputFilter;

  private itemFloatingChars: ItemFloatingChars[] = [];

  /** Item Types */
  private itemTypes: ItemCategoryModel[] = [];

  /** Catalogs */
  private years: number[] = [];

  constructor(
    private route: ActivatedRoute,
    private floatingCharsService: FloatingCharsService,
    private categoryService: CategoryService,
    private utilsService: UtilsService
    ) { }

  ngOnInit() {

    // 1. Get Current Filters
    this.route.params.subscribe(params => {
      
      this.inputFilter = this.utilsService.decodeBase64(params.inputFilter);
      
      // 2. Load Filters From DB
      this.getYearsCat();
      this.getFloatingChars();
      this.getCategoryTypes(this.inputFilter);
    });
  }

  getYearsCat(): void {
    for (let year = 2020; year > 1980; year--) {
      this.years = this.years.concat(year);
    }
  }

  getFloatingChars(): void {
    this.floatingCharsService.getAll().subscribe( (itemFloatingChars: ItemFloatingChars[]) => {
      this.itemFloatingChars = itemFloatingChars;      
    });
  }

  getCategoryTypes(inputFilter: any): void {

    this.categoryService.getCategoryTypes().subscribe((itemType: ItemCategoryModel[]) => {
      this.itemTypes = itemType.filter(cat => cat.subCategoryName == "Bicicletas")[0].subCategories;

      
      for (let i = 0; i < this.itemTypes.length; i++) {

        this.itemTypes[i].isSelected = false;

        if(inputFilter._itemTypes) {

          console.log(inputFilter._itemTypes[i]);
          if(inputFilter._itemTypes[i].isSelected)
            this.itemTypes[i].isSelected =
            inputFilter._itemTypes[i].isSelected;
        }
      }
      
    });
  }

  filterCatalog(flaotingChar: string): ItemFloatingCharsCat[] {
    const charsCatalog: ItemFloatingChars[]  =
      this.itemFloatingChars
        .filter( floatChar => floatChar.floatingCharName == flaotingChar);

    if(charsCatalog.length > 0) {
      return charsCatalog[0].catalogList;
    } else {
      return [];
    }
  }

  escapePipe(catName: string): string{
    return catName.split('|').join(' - ');
  }

}
