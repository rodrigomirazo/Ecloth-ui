import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CategoryService } from '../category-tree/category.service';
import { FloatingCharsService } from '../floating-chars/floating-chars.service';
import { ItemService } from '../item-list/item.service';
import { FloatingCharIdsSelected } from '../models/floating-char-Ids-selected';
import { ItemFloatingChars } from '../models/item-floating-char';
import { ItemFloatingCharsCat } from '../models/item-floating-char-cat';
import { ItemSelectedFilters } from '../models/item-selected-filters';
import { ItemCategoryModel } from '../models/main-categories-model';

@Component({
  selector: 'app-market-place',
  templateUrl: './market-place.component.html',
  styleUrls: ['./market-place.component.css']
})
export class MarketPlaceComponent implements OnInit {

  private filter: string;

  private itemFloatingChars: ItemFloatingChars[];

  private bicicleTypes: ItemCategoryModel[] = [];
  private frameCat: ItemFloatingCharsCat[];
  private genereCat: ItemFloatingCharsCat[];
  private breakCat: ItemFloatingCharsCat[];
  private sizeCat: ItemFloatingCharsCat[];
  private wheelSizeCat: ItemFloatingCharsCat[];
  private conditionCat: ItemFloatingCharsCat[];
  private years: number[] = [];

  /** Selected Filters */
  private selectedTypes: ItemSelectedFilters[] = [];
  private selectedYears: any[] = [];
  private floatingCharIdsSelected: FloatingCharIdsSelected[] = [];
4
  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private floatingCharsService: FloatingCharsService,
    private categoryService: CategoryService) { }

  ngOnInit() {
    this.getFloatingChars();
    this.getCategoryTypes();
    this.route.queryParams.subscribe(params => {
      this.filter = params['filter'];
    });
    for (let year = 2020; year > 1980; year--) {
      this.years = this.years.concat(year);
      
    }
  }


  getFloatingChars(): void {
    this.floatingCharsService.getAll().subscribe( (itemFloatingChars: ItemFloatingChars[]) => {

      this.itemFloatingChars = itemFloatingChars;

      this.frameCat = this.filterCatalog( 'material_de_cuadro');
      this.genereCat = this.filterCatalog( 'genero');
      this.sizeCat = this.filterCatalog( 'talla');
      this.wheelSizeCat = this.filterCatalog( 'medida_de_llanta');
      this.conditionCat = this.filterCatalog( 'condition');
      this.breakCat = this.filterCatalog( 'tipo_de_freno');
      

      console.log(this.frameCat);
      console.log(this.genereCat);
      console.log(this.sizeCat);
      console.log(this.wheelSizeCat);
      
    });
  }

  getCategoryTypes(): void {
    this.categoryService.getCategoryTypes().subscribe((itemType: ItemCategoryModel[]) => {
      this.bicicleTypes = itemType.filter(cat => cat.subCategoryName == "Bicicletas")[0].subCategories;
      this.bicicleTypes.forEach( type => {


        this.selectedTypes = this.selectedTypes.concat(
            new ItemSelectedFilters(type.id, false, [])
          )
      });

      console.log("selectedTypes: ", this.selectedTypes);

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
