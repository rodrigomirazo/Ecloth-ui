import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { CategoryService } from '../category-tree/category.service';
import { FloatingCharsService } from '../floating-chars/floating-chars.service';
import { ItemService } from '../item-list/item.service';
import { ItemFloatingChars } from '../models/item-floating-char';
import { ItemFloatingCharRel } from '../models/item-floating-char-rel';
import { UserItem } from '../models/Item-user-model';
import { ItemCategoryModel } from '../models/main-categories-model';
import { UploadFilesService } from '../services/upload-files.service';

@Component({
  selector: 'app-sale-item',
  templateUrl: './sale-item.component.html',
  styleUrls: ['./sale-item.component.css']
})
export class SaleItemComponent {

  // Item
  private item: UserItem = new UserItem();
  // User
  private userId: number;
  //Floating Chars
  private itemFloatingCharsRel: ItemFloatingCharRel[] = [];

  /** Category List */
  private mainCategoryList: ItemCategoryModel[] = [];
  private hierLevels: Array<number> = [];
  private categoryLevelSelector: number[] = [];
  private subcategoryLevelOptions: Array<ItemCategoryModel[]> = [];
  private itemFloatingChars: ItemFloatingChars[];

  /** Constants */
  private initialLevels: number = 3;

  /** File Uploading */
  private selectedFiles: FileList;
  private progressInfos = [];
  private fileInfos =  [];
  private fileResult =  [];
  
  constructor(
    private categoryService: CategoryService,
    private floatingCharsService: FloatingCharsService,
    private itemService: ItemService,
    private uploadFilesService: UploadFilesService) {
      this.userId = 1;
      for (let level = 0; level < this.initialLevels; level++) {
        this.hierLevels.push(level);
        this.categoryLevelSelector = this.categoryLevelSelector.concat(-1);
        this.subcategoryLevelOptions = this.subcategoryLevelOptions.concat([]);
      }
      this.categoryLevelSelector[0] = 0;

      this.getCategoryTypes();
      this.getFloatingChars();

      //this.fileInfos = this.uploadFilesService.getFiles();
  }

  getCategoryTypes(): void {
    this.categoryService.getCategoryTypes().subscribe((itemType: ItemCategoryModel[]) => {
      console.log(itemType);
      this.mainCategoryList = itemType;
      this.subcategoryLevelOptions[0] = this.mainCategoryList;
    });
  }

  getFloatingChars(): void {
    this.floatingCharsService.getAll().subscribe( (itemFloatingChars: ItemFloatingChars[]) => {
      this.itemFloatingChars = itemFloatingChars;
      this.itemFloatingChars.forEach(floatingChar => {
        
        this.itemFloatingCharsRel = this.itemFloatingCharsRel.concat(new ItemFloatingCharRel(floatingChar.floatingCharId, -1));
      });

      console.log(this.itemFloatingChars);
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

  selectFiles(event) {
    this.progressInfos = [];

    console.log(event.target.files);
    const files = event.target.files;
    let isImage = true;
    this.fileInfos = [];

    for (let i = 0; i < files.length; i++) {
      if (files.item(i).type.match('image.*')) {

        var reader = new FileReader();

        reader.onload = (event:any) => {
          console.log(event.target.result);
           this.fileInfos.push(event.target.result); 
        }

        reader.readAsDataURL(event.target.files[i]);

        continue;
      } else {
        isImage = false;
        alert('invalid format!');
        break;
      }
    }
  
    if (isImage) {
      this.selectedFiles = event.target.files;
    } else {
      this.selectedFiles = undefined;
      event.srcElement.percentage = null;
    }
    console.log(this.selectedFiles);
  }

  selectFloatingChar(charIndx: number, floatingCharId: number, floatingCharCatId: number) {
    
    console.log(charIndx + " - " +floatingCharId +" - "+ floatingCharCatId);

    this.itemFloatingCharsRel[charIndx].floatingCharId = floatingCharId;
    this.itemFloatingCharsRel[charIndx].floatingCharCatId = floatingCharCatId;
    console.log(this.itemFloatingCharsRel);
  }

  uploadFiles() {
    for (let i = 0; i < this.selectedFiles.length; i++) {
      this.upload(i, this.selectedFiles[i]);
    }
  }

  upload(idx, file) {
    this.progressInfos[idx] = { value: 0, fileName: file.name };
    
    this.uploadFilesService.upload(file, this.userId, 1).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progressInfos[idx].percentage = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.fileResult = this.fileResult.concat(file.name);
        }
      });
  }

  save() {
    
  }

}
