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
  private charLevels: Array<number> = [];
  
  private undefinedLevels: boolean = false;
  private initialLevels: number = 3;
  
  constructor(private categoryService: CategoryService) {

    for (let level = 0; level < this.initialLevels; level++)
      this.hierLevels.push(-1);

    this.categoryService.getCategoryTypes().subscribe((itemType: ItemCategoryModel[]) => {
      console.log("mainCategoryList: ", itemType);
      this.mainCategoryList = itemType;
    });

  }

  goToNextSection(hierLevelId: number) {
    this.hierLevels.push(hierLevelId);
    console.log("");
  }

  getCurrentCategoryName(currentCategory: ItemCategoryModel, hierLevel: number) : string {
    let nextCategory: ItemCategoryModel = currentCategory;
    
    for (let levelIter = 0; levelIter < hierLevel; levelIter++) {
      nextCategory = nextCategory.subCategories[0];
    }

    return nextCategory.categoryName;
  }

  getCurrentCategoryId(currentCategory: ItemCategoryModel, hierLevel: number) : number {
    let nextCategory: ItemCategoryModel = currentCategory;
    
    for (let levelIter = 0; levelIter < hierLevel; levelIter++) {
      nextCategory = nextCategory.subCategories[levelIter];
    }

    return nextCategory.id;
  }

  getCurrentCategoryList(currentCategory: ItemCategoryModel[], hierLevel: number) : ItemCategoryModel[] {
    let nextCategories: ItemCategoryModel[] = currentCategory;
    
    for (let levelIter = 0; levelIter < hierLevel; levelIter++) {
      nextCategories = nextCategories[0].subCategories;
    }

    return nextCategories;
  }

}
