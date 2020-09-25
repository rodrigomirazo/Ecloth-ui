import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category-tree/category.service';
import { ItemCategoryModel } from '../models/main-categories-model';

@Component({
  selector: 'app-sale-item',
  templateUrl: './sale-item.component.html',
  styleUrls: ['./sale-item.component.css']
})
export class SaleItemComponent {

  private mainCategoryList: ItemCategoryModel[] = [];
  private hierLevels: Array<number> = [];
  private categoryLevelId: number[] = [];
  
  private initialLevels: number = 3;
  
  constructor(private categoryService: CategoryService) {

    for (let level = 0; level < this.initialLevels; level++) {
      this.hierLevels.push(level);
      this.categoryLevelId = this.categoryLevelId.concat(-1);
    }
    this.categoryLevelId[0] = 0;

    this.categoryService.getCategoryTypes().subscribe((itemType: ItemCategoryModel[]) => {
      console.log("mainCategoryList: ", 3);
      this.mainCategoryList = itemType;
    });

  }

  goToNextSection(hierLevel: number, hierLevelId: number) {
    this.categoryLevelId[hierLevel+1] = hierLevelId;
    console.log("");
  }

  getCurrentCategoryName(currentCategory: ItemCategoryModel, hierLevel: number) : string {
    let nextCategory: ItemCategoryModel = currentCategory;
    
    for (let levelIter = 0; levelIter < hierLevel; levelIter++) {
      if (!nextCategory)
        break;
      nextCategory = nextCategory.subCategories[0];
    }
    return (nextCategory)? nextCategory.categoryName : "";
  }

  /*
  getCurrentCategoryId(currentCategory: ItemCategoryModel, hierLevel: number) : number {
    let nextCategory: ItemCategoryModel = currentCategory;
    
    for (let levelIter = 0; levelIter < hierLevel; levelIter++) {
      nextCategory = nextCategory.subCategories[levelIter];
    }

    return (nextCategory)? nextCategory.id : null;
  }
*/

  getCurrentCategoryList(currentCategory: ItemCategoryModel[], hierLevel: number) : ItemCategoryModel[] {
    let nextCategories: ItemCategoryModel[] = currentCategory;

    if( this.categoryLevelId[hierLevel] == -1 ) {
      return [];
    }
    
    for (let levelIter = 0; levelIter < hierLevel; levelIter++) {
      if (!nextCategories)
        break;
      nextCategories = nextCategories[ 0 ].subCategories;
    }

    return nextCategories;
  }
}
