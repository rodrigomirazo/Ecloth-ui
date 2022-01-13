import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../category-tree/category.service';
import { FloatingCharsService } from '../floating-chars/floating-chars.service';
import { InputFilter } from '../_models/input-filter-model';
import { InputFilterYear } from '../_models/input-filter-years-model';
import { ItemFloatingChars } from '../_models/item-floating-char';
import { ItemFloatingCharsCat } from '../_models/item-floating-char-cat';
import { ItemCategoryModel } from '../_models/main-categories-model';
import { UtilsService } from '../_services/utils.service';

@Component({
  selector: 'app-market-place',
  templateUrl: './market-place.component.html',
  styleUrls: ['./market-place.component.css']
})
export class MarketPlaceComponent implements OnInit {

  inputFilter: InputFilter;
  outputFilter: InputFilter;

  /** Catalogs */
  selectedYears: number[] = [];

  /** Change Detector */
  changeIncrement: number = 0;

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

      // Verify Earch Bar
      if(params.searchBar) {
        this.inputFilter.searchBar = params.searchBar;
      }
      
      // 2. Load Filters From DB
      this.getYearsCat();
      this.getFloatingChars();
      this.getCategoryTypes(this.inputFilter);
    });
  }

  getYearsCat(): void {

    console.log(this.inputFilter);
    if(!this.inputFilter.years)
      this.inputFilter.years = [];

    for (let year = 2021; year > 2015; year--) {
      this.inputFilter.years = this.inputFilter.years.concat(new InputFilterYear(year, false));
      console.log(this.inputFilter.years);
    }
  }

  getFloatingChars(): void {
    this.floatingCharsService.getAll().subscribe( (itemFloatingChars: ItemFloatingChars[]) => {
      this.inputFilter.itemFloatingChars = itemFloatingChars;

      for (let i = 0; i < itemFloatingChars.length; i++) {

        for (let j = 0; j < itemFloatingChars[i].catalogList.length; j++) {
          
          this.inputFilter.itemFloatingChars[i].catalogList[j].isSelected = false;
        }
      }
    });
  }

  getCategoryTypes(inputFilter: InputFilter): void {

    this.categoryService.getCategoryTypes().subscribe((itemType: ItemCategoryModel[]) => {
      
      if(inputFilter.itemTypes.length == 0) {
        this.inputFilter.itemTypes = itemType.filter(cat => cat.subCategoryName == "Bicicletas")[0].subCategories;
        console.log("item types = ", this.inputFilter.itemTypes);
      }
      
    });
  }

  setUpSelectedYears() {
    this.changeIncrement++;
    for (let i = 0; i < this.inputFilter.years.length; i++) {
      if(this.selectedYears.indexOf(this.inputFilter.years[i].$year) != -1 ) {
        this.inputFilter.years[i].$selected = true;
      } else {
        this.inputFilter.years[i].$selected = false;
      }
    }
  }

  updateFloatingChar() {
    // Detect Change Only if Floating chars are selected
    this.changeIncrement++;
  }

  filterCatalog(flaotingChar: string): ItemFloatingCharsCat[] {

    if(!this.inputFilter.itemFloatingChars) {
      return [];
    }
    const charsCatalog: ItemFloatingChars[]  =
      this.inputFilter.itemFloatingChars
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
