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
  private categoryLevelSelector: number[] = [];
  private subcategoryLevelOptions: Array<ItemCategoryModel[]> = [];
  
  private initialLevels: number = 3;
  
  constructor(private categoryService: CategoryService) {

    for (let level = 0; level < this.initialLevels; level++) {
      this.hierLevels.push(level);
      this.categoryLevelSelector = this.categoryLevelSelector.concat(-1);
      this.subcategoryLevelOptions = this.subcategoryLevelOptions.concat([]);
    }
    this.categoryLevelSelector[0] = 0;

    this.categoryService.getCategoryTypes().subscribe((itemType: ItemCategoryModel[]) => {
      
      this.mainCategoryList = itemType;
      this.subcategoryLevelOptions[0] = this.mainCategoryList;
    });

  }

  goToNextSection(hierLevel: number, categoryId: number, goToNextSection: number) {
    
    let nextCategory: ItemCategoryModel[] = this.mainCategoryList;
    
    if( hierLevel + 1 >= this.categoryLevelSelector.length ) {
      return ;
    }

    for (let levelIter = 0; levelIter <= hierLevel; levelIter++) {
      if (!nextCategory)
        break;
      
      // Determine chosen index
      let pathIndex = 0;
      for (let i = 0; i < nextCategory.length; i++) {
        if(nextCategory[i].id == this.categoryLevelSelector[levelIter]) {
          break;
        }
        pathIndex++;
      }
      
      nextCategory = nextCategory[ pathIndex ].subCategories;
    }

    console.log(nextCategory);

    //Assign next category
    this.subcategoryLevelOptions[hierLevel+1] = nextCategory;

    //Remove Rest of the Levels options
    for (let index = hierLevel + 2; index < this.subcategoryLevelOptions.length; index++) {
      this.subcategoryLevelOptions[index] = [];
      this.categoryLevelSelector[index] = -1;
    }

    //Remove Rest of selected levels
    for (let index = hierLevel + 1; index < this.subcategoryLevelOptions.length; index++) {
      this.categoryLevelSelector[index] = -1;
    }
    
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

}
