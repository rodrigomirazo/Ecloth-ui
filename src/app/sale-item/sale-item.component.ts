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
import { User } from '../models/Item-user';
import { Router } from '@angular/router';
import { GenericDialogComponent } from '../generic-dialog/generic-dialog.component';
import { MatDialog } from '@angular/material/dialog';

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
  private thirdFormGroup: FormGroup;

  /** update Item Resume */
  private increment: number = 0;
  
  ngOnInit() {

  }

  constructor(
    public dialog: MatDialog,
    private categoryService: CategoryService,
    private floatingCharsService: FloatingCharsService,
    private itemService: ItemService,
    private uploadFilesService: UploadFilesService,
    private _formBuilder: FormBuilder,
    private router: Router) {

      // Initialize itemId
      this.item.id = null;
      //Set User
      this.item.user = new User();
      this.item.user.id = "1";
      //Set Status
      this.item.statusId = 1;
      //Set Empty Image Array
      this.item.itemImgUrls = [];

      console.log("this.item.user: ", this.item.user);

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
        isModified: new FormControl('true', Validators.required),
        comments: new FormControl({value: '', disabled: true}, [Validators.required, Validators.maxLength(500)]),

        // Floating CHARS
        brand: new FormControl('', Validators.required),
        genere: new FormControl('', Validators.required),
        frameMaterial: new FormControl('', Validators.required),
        wheelSize: new FormControl('', Validators.required),
        breakType: new FormControl('', Validators.required),
        talla: new FormControl('', Validators.required)
        
      });
      this.secondFormGroup = this._formBuilder.group({
        
      });
      this.thirdFormGroup = this._formBuilder.group({
        price: ['', [Validators.required, Validators.min(100), Validators.max(100000)]]
      });
      
      this.userId = 1;

      for (let i = 0; i < 8; i++) {
        this.files = this.files.concat(null);
      }

      this.getFloatingChars();
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

  onEmitFrameRange($event) {
    this.item.frameRate = $event;
  }
  
  onEmitRuedosRange($event) {
    this.item.ruedosRate = $event;
  }

  onEmitWheelsRange($event) {
    this.item.wheelsRate = $event;
  }
  
  onEmitComponentsRange($event) {
    this.item.comments = $event;
  }
  

  textAreaValidation() {
    console.log(this.firstFormGroup.get("isModified").value);

    let control = this.firstFormGroup.get('comments');
    control.disabled ? control.enable() : control.disable();
  }

  firstStepSave() {
    console.log("this.firstFormGroup.valid: ", this.firstFormGroup.valid);
    if( this.firstFormGroup.valid
      ) {

      this.item = this.itemService.adaptFormToItem(this.firstFormGroup, this.item);

      //Flaoting Chars
      this.item.itemFloatingChars = [
        new ItemFloatingCharRel(this.filterFloatCharRel("brand").floatingCharId, "",       this.firstFormGroup.value.brand),
        new ItemFloatingCharRel(this.filterFloatCharRel("genero").floatingCharId, "",      this.firstFormGroup.value.genere),
        new ItemFloatingCharRel(this.filterFloatCharRel("material_de_cuadro").floatingCharId, "",  this.firstFormGroup.value.frameMaterial),
        new ItemFloatingCharRel(this.filterFloatCharRel("medida_de_llanta").floatingCharId, "",    this.firstFormGroup.value.wheelSize),
        new ItemFloatingCharRel(this.filterFloatCharRel("tipo_de_freno").floatingCharId, "",       this.firstFormGroup.value.breakType),
        new ItemFloatingCharRel(this.filterFloatCharRel("talla").floatingCharId, "",               this.firstFormGroup.value.talla),
      ];

      this.itemService.post(this.item, true).subscribe( (itemRepsonse: UserItem) => {
        console.log("itemRepsonse: ", itemRepsonse);
        this.item.id = itemRepsonse.id;
      });
    }
  }

  secondStepSave() {
    this.uploadFlag = true;
  }

  thirdStepSave() {
    //TODO: color catalog
    console.log(this.item);

    this.item.price = this.thirdFormGroup.value.price;

    this.itemService.post(this.item, true).subscribe( (itemRepsonse: UserItem) => {
      console.log("itemRepsonse: ", itemRepsonse);
      this.item.id = itemRepsonse.id;
    });
  }

  finalStep() {
    //openDialog
    const dialogRef = this.dialog.open(GenericDialogComponent, {
      width: '250px',
      height: '200px',
      data: {
        image: "/assets/images/publish/cargada-error-12.svg"
      }
    })
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.router.navigate(['item-detail/', this.item.id])
    });
  }

}
