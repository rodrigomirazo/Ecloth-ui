import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category-tree/category.service';
import { FloatingCharsService } from '../floating-chars/floating-chars.service';
import { ItemService } from '../item-list/item.service';
import { ItemFloatingChars } from '../models/item-floating-char';
import { ItemFloatingCharRel } from '../models/item-floating-char-rel';
import { UserItem } from '../models/Item-user-model';
import { ItemCategoryModel } from '../models/main-categories-model';
import { UploadFilesService } from '../services/upload-files.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ItemFloatingCharsCat } from '../models/item-floating-char-cat';
import { InputFilterYear } from '../models/input-filter-years-model';
import { CommentStmt } from '@angular/compiler';

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
  private itemTypeSelected: ItemCategoryModel;
  private yearSelected: InputFilterYear;
  private textarea: string = "";

  /** Category List */
  private categoryLevelSelector: number[] = [];
  private itemFloatingChars: ItemFloatingChars[];
  private itemTypes: ItemCategoryModel[];
  private years: InputFilterYear[];

  /** File Uploading */
  private fileCounter; number = 0;
  private files: File[] = [];
  private filesToUpload: File[] = [];
  private uploadFlag: boolean = false;

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
        backRear: new FormControl('', Validators.required),
        model: new FormControl('', Validators.required),
        frontRear: new FormControl('', Validators.required),
        year: new FormControl('', Validators.required),
        suspension: new FormControl('', Validators.required),
        itemTypeCatId: new FormControl('', Validators.required),

        ruedos: new FormControl('', Validators.required),
        cassette: new FormControl('', Validators.required),
        series: new FormControl('', Validators.required),
        gearLevel: new FormControl('', Validators.required),
        multiplication: new FormControl('', Validators.required),
        isModified: new FormControl('', Validators.required),
        comments: new FormControl({value: '', disabled: true}, [Validators.required, Validators.maxLength(500)]),


        brand: new FormControl('', Validators.required),
        genere: new FormControl('', Validators.required),
        frameMaterial: new FormControl('', Validators.required),
        wheelSize: new FormControl('', Validators.required),
        breakType: new FormControl('', Validators.required),
        talla: new FormControl('', Validators.required)
        
      });
      this.secondFormGroup = this._formBuilder.group({
        secondCtrl: ['', Validators.required]
      });
      
      this.userId = 1;

      for (let i = 0; i < 8; i++) {
        this.files = this.files.concat(null);
      }

      this.getFloatingChars();+
      this.getCategoryTypes();
      this.getYearsCat();
  }

  getCategoryTypes(): void {

    this.categoryService.getCategoryTypes().subscribe((itemType: ItemCategoryModel[]) => {
      this.itemTypes = itemType.filter(cat => cat.subCategoryName == "Bicicletas")[0].subCategories;
      console.log("itemTypes", this.itemTypes);
    });
  }

  getYearsCat(): void {

    if(!this.years)
      this.years = [];

    for (let year = 2020; year > 2015; year--) {
      this.years = this.years.concat(new InputFilterYear(year, false));
    }
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

  escapePipe(catName: string): string {
    return catName.split('|').join(' - ');
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

  textAreaValidation() {
    console.log(this.firstFormGroup.get("isModified").value);

    let control = this.firstFormGroup.get('comments');
    control.disabled ? control.enable() : control.disable();
  }

  save() {
    /*
    this.item.itemFloatingChars = this.itemFloatingCharsRel;
    this.item.itemTypeCatId = this.categoryLevelSelector[0];
    this.item.lastLevelCategoryId = this.categoryLevelSelector[this.categoryLevelSelector.length];
    this.item.statusId = 1;
    */
    //TODO: color catalog
    this.item = this.itemService.adaptFormToItem(this.firstFormGroup);
    
    //Flaoting Chars
    this.item.itemFloatingChars = [
      new ItemFloatingCharRel(this.filterFloatCharRel("brand").floatingCharId, "",       this.firstFormGroup.value.brand),
      new ItemFloatingCharRel(this.filterFloatCharRel("genero").floatingCharId, "",      this.firstFormGroup.value.genere),
      new ItemFloatingCharRel(this.filterFloatCharRel("material_de_cuadro").floatingCharId, "",  this.firstFormGroup.value.frameMaterial),
      new ItemFloatingCharRel(this.filterFloatCharRel("medida_de_llanta").floatingCharId, "",    this.firstFormGroup.value.wheelSize),
      new ItemFloatingCharRel(this.filterFloatCharRel("tipo_de_freno").floatingCharId, "",       this.firstFormGroup.value.breakType),
      new ItemFloatingCharRel(this.filterFloatCharRel("talla").floatingCharId, "",               this.firstFormGroup.value.talla),
    ];

    console.log(this.firstFormGroup.errors);

    this.uploadFlag = true;
  }

}
