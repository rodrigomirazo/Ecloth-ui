import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category-tree/category.service';
import { FloatingCharsService } from '../floating-chars/floating-chars.service';
import { InputFilter } from '../models/input-filter-model';
import { ItemCategoryModel } from '../models/main-categories-model';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private mountainFilter: string;
  private urbanFilter: string;
  private roadFilter: string;
  
  /** Item Types */
  private itemTypes: ItemCategoryModel[] = [];

  constructor(
    private floatingCharsService: FloatingCharsService,
    private categoryService: CategoryService,
    private utilsService: UtilsService
  ) { }

  ngOnInit() {
    this.getCategoryTypesLinkMountain();
    this.getCategoryTypesLinkRoad();
    this.getCategoryTypesLinkUrban();
  }

  getCategoryTypesLinkMountain(): void {
    this.categoryService.getCategoryTypes().subscribe((itemType: ItemCategoryModel[]) => {
      
      // Mountain
      const mountainBikes: ItemCategoryModel[] = itemType
          .filter(cat => cat.subCategoryName == "Bicicletas")[0].subCategories;
      const mountainIndex: number = mountainBikes
          .map(cat => cat.subCategoryName ).indexOf("Montaña");
      mountainBikes[mountainIndex].isSelected = true;
      this.mountainFilter = this.utilsService.encodeBase64(new InputFilter([], "", [], mountainBikes));
    });
  }

  getCategoryTypesLinkRoad(): void {
    this.categoryService.getCategoryTypes().subscribe((itemType: ItemCategoryModel[]) => {
      
      // road
      const roadBikes: ItemCategoryModel[] = itemType
        .filter(cat => cat.subCategoryName == "Bicicletas")[0].subCategories;
      const roadIndex: number = roadBikes
          .map(cat => cat.subCategoryName ).indexOf("Ruta");
          roadBikes[roadIndex].isSelected = true;
      this.roadFilter = this.utilsService.encodeBase64(new InputFilter([], "", [], roadBikes));
  
    });
  }

  getCategoryTypesLinkUrban(): void {
    this.categoryService.getCategoryTypes().subscribe((itemType: ItemCategoryModel[]) => {
      
      // Urbain
      const urbanBikes: ItemCategoryModel[] = itemType
          .filter(cat => cat.subCategoryName == "Bicicletas")[0].subCategories;
      const urbanIndex: number = urbanBikes
          .map(cat => cat.subCategoryName ).indexOf("Urbana");
      urbanBikes[urbanIndex].isSelected = true;
      this.urbanFilter = this.utilsService.encodeBase64(new InputFilter([], "", [], urbanBikes));
    });
  }

  encodeFilter(inputFilter: InputFilter) : string {
    console.log(inputFilter);
    return this.utilsService.encodeBase64(inputFilter);
  }

}
