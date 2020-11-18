import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category-tree/category.service';
import { FloatingCharsService } from '../floating-chars/floating-chars.service';
import { ItemService } from '../item-list/item.service';
import { ItemFloatingChars } from '../models/item-floating-char';
import { ItemFloatingCharRel } from '../models/item-floating-char-rel';
import { UserItem } from '../models/Item-user-model';
import { ItemCategoryModel } from '../models/main-categories-model';
import { UploadFilesService } from '../services/upload-files.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ItemFloatingCharsCat } from '../models/item-floating-char-cat';

@Component({
  selector: 'app-sale-item',
  templateUrl: './sale-item.component.html',
  styleUrls: ['./sale-item.component.css']
})
export class SaleItemComponent implements OnInit {

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

  /** Form Groups */
  private firstFormGroup: FormGroup;
  private secondFormGroup: FormGroup;

  ngOnInit() {

  }

  constructor(
    private categoryService: CategoryService,
    private floatingCharsService: FloatingCharsService,
    private itemService: ItemService,
    private uploadFilesService: UploadFilesService,
    private _formBuilder: FormBuilder) {

      this.firstFormGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required]
      });
      this.secondFormGroup = this._formBuilder.group({
        secondCtrl: ['', Validators.required]
      });
      
      this.userId = 1;
      /*
      for (let level = 0; level < this.initialLevels; level++) {
        this.hierLevels.push(level);
        this.categoryLevelSelector = this.categoryLevelSelector.concat(-1);
        this.subcategoryLevelOptions = this.subcategoryLevelOptions.concat([]);
      }
      this.categoryLevelSelector[0] = 0;
      */

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
        
        this.itemFloatingCharsRel = this.itemFloatingCharsRel.concat(
            new ItemFloatingCharRel(floatingChar.floatingCharId, floatingChar.floatingCharName, -1, "")
          );
      });

      console.log(this.itemFloatingChars);
    });
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

  filterFloatChar(flaotingChar: string): ItemFloatingCharsCat[] {

    if(!this.itemFloatingChars) {
      return [];
    }
    const charsCatalog: ItemFloatingChars[]  =
      this.itemFloatingChars
        .filter( floatChar => floatChar.floatingCharName == flaotingChar);
    
    if(charsCatalog.length > 0) {
      return charsCatalog[0].catalogList;
    } else {
      return [];
    }
  }

  filterFloatCharRel(flaotingChar: string): ItemFloatingCharRel {

    if(!this.itemFloatingCharsRel) {
      return null;
    }
    const itemFloatingCharsRelFilter: ItemFloatingCharRel[]  =
      this.itemFloatingCharsRel
        .filter( floatChar => floatChar.floatingCharName == flaotingChar);
    
    if(itemFloatingCharsRelFilter.length > 0) {
      return itemFloatingCharsRelFilter[0];
    } else {
      return null;
    }
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
    this.item.itemFloatingChars = this.itemFloatingCharsRel;
    this.item.itemTypeCatId = this.categoryLevelSelector[0];
    this.item.lastLevelCategoryId = this.categoryLevelSelector[this.categoryLevelSelector.length];
    this.item.statusId = 1;
    //TODO: color catalog
    this.item.itemColorId = 85;
    
    this.itemService.post( this.item ).subscribe(persistedItem => {
      console.log(persistedItem);

      this.uploadFiles();

    });
  }

}
