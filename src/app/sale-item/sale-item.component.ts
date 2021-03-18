import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category-tree/category.service';
import { FloatingCharsService } from '../floating-chars/floating-chars.service';
import { ItemService } from '../_services/item.service';
import { ItemFloatingChars } from '../_models/item-floating-char';
import { ItemFloatingCharRel } from '../_models/item-floating-char-rel';
import { UserItem } from '../_models/Item-model';
import { ItemCategoryModel } from '../_models/main-categories-model';
import { UploadFilesService } from '../_services/upload-files.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ItemFloatingCharsCat } from '../_models/item-floating-char-cat';
import { InputFilterYear } from '../_models/input-filter-years-model';
import { User } from '../_models/User-model';
import { Router } from '@angular/router';
import { GenericDialogComponent } from '../generic-dialog/generic-dialog.component';
import { AuthenticationService } from '../_services/authentication.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sale-item',
  templateUrl: './sale-item.component.html',
  styleUrls: ['./sale-item.component.css']
})
export class SaleItemComponent implements OnInit {

  // Item
  item: UserItem = new UserItem();
  // User
  userId: number;
  //Floating Chars
  itemFloatingCharsRel: ItemFloatingCharRel[] = [];
  itemTypeSelected: ItemCategoryModel;
  yearSelected: InputFilterYear;
  textarea: string = "";

  /** Category List */
  categoryLevelSelector: number[] = [];
  itemFloatingChars: ItemFloatingChars[];
  itemTypes: ItemCategoryModel[];
  years: InputFilterYear[];

  /** File Uploading */
  fileCounter; number = 0;
  files: File[] = [];
  filesToUpload: File[] = [];
  uploadFlag: boolean = false;
  imgSelectionValid: boolean = false;

  /** Form Groups */
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  /** update Item Resume */
  increment: number = 0;
  
  ngOnInit() {
    
  }

  
  constructor(
    public dialog: MatDialog,
    private authService: AuthenticationService,
    private categoryService: CategoryService,
    private floatingCharsService: FloatingCharsService,
    private itemService: ItemService,
    private uploadFilesService: UploadFilesService,
    private _formBuilder: FormBuilder,
    private router: Router) {

      // Initialize itemId
      this.item.id = null;
      //Set User
      const userSession = this.authService.getSessionUser();
      this.item.user = new User();
      this.item.user.id = userSession.id;
      //Set Status
      this.item.statusId = 1;
      //Set Empty Image Array
      this.item.itemImgUrls = [];

      this.firstFormGroup = this._formBuilder.group({
        backRear: new FormControl('', Validators.required),
        model: new FormControl('', Validators.required),
        frontRear: new FormControl('', Validators.required),
        year: new FormControl('', Validators.required),
        suspension: new FormControl('', Validators.required),
        backSuspension: new FormControl('', ),
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
        brandSearchBar: new FormControl(),
        
        genere: new FormControl('', Validators.required),
        genereSearchBar: new FormControl(),
        
        frameMaterial: new FormControl('', Validators.required),
        frameMaterialSearchBar: new FormControl(),

        wheelSize: new FormControl('', Validators.required),
        wheelSizeSearchBar: new FormControl(),

        breakType: new FormControl('', Validators.required),
        breakTypeSearchBar: new FormControl(),

        talla: new FormControl('', Validators.required),
        tallaSearchBar: new FormControl()
      });
      this.secondFormGroup = this._formBuilder.group({
        
      });
      this.thirdFormGroup = this._formBuilder.group({
        price: ['', [Validators.required, Validators.min(1000), Validators.max(500000), Validators.pattern(/^[0-9]\d*$/)]]
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
    });
  }

  getYearsCat(): void {

    if(!this.years)
      this.years = [];

    for (let year = 2021; year > 2015; year--) {
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
    });
  }

  escapePipe(catName: string): string {
    return catName.split('|').join(' - ');
  }

  selectFloatingChar(charIndx: number, floatingCharId: number, floatingCharCatId: number) {
    
    this.itemFloatingCharsRel[charIndx].floatingCharId = floatingCharId;
    this.itemFloatingCharsRel[charIndx].floatingCharCatId = floatingCharCatId;
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
    this.item.componentsRate = $event;
  }
  

  textAreaValidation() {
    let control = this.firstFormGroup.get('comments');
    control.disabled ? control.enable() : control.disable();
  }

  firstStepSave($event: any) {
    $event.preventDefault();
    console.log(this.firstFormGroup);
    if( this.firstFormGroup.status == "VALID"
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

      console.log("this.userId: ", this.userId);
      this.itemService.post(this.item, true).subscribe( (itemRepsonse: UserItem) => {

        this.item.id = itemRepsonse.id;
      });
    }
  }

  rateCompleted() : boolean {
    if(
      this.item.frameRate &&
      this.item.ruedosRate &&
      this.item.wheelsRate &&
      this.item.componentsRate
      ) {
        return true;
      }
      return false;
  }

  onValidImgSelections($event) {
    this.imgSelectionValid = true;
  }

  secondStepSave($event: any) {
    $event.preventDefault();
    this.uploadFlag = true;
  }

  onSubmit($event: any) {
    $event.preventDefault();
  }

  thirdStepSave() {
    if( this.thirdFormGroup.status == "VALID" && this.rateCompleted() ) {
      this.item.price = this.thirdFormGroup.value.price;

      this.itemService.post(this.item, true).subscribe( (itemRepsonse: UserItem) => {
        this.item.id = itemRepsonse.id;
        this.router.navigate(['item-detail/', this.item.id]);
      });
    }
  }

  finalStep() {
    //openDialog
    /*
   const dialogRef = this.dialog.open(GenericDialogComponent, {
      width: '250px',
      height: '200px',
      data: {
        image: "/assets/images/publish/cargada-error-11.svg"
      }
    })
    
    dialogRef.afterClosed().subscribe(result => {
    });
    */
  }

  populate() {

    //text
    this.firstFormGroup.controls['backRear'].setValue("backRear");
    this.firstFormGroup.controls['model'].setValue("model 1");
    this.firstFormGroup.controls['frontRear'].setValue("front Rear");
    this.firstFormGroup.controls['year'].setValue(2020);
    this.firstFormGroup.controls['suspension'].setValue("Suspension 1");
    this.firstFormGroup.controls['backSuspension'].setValue("Suspension Trasera 1");
    this.firstFormGroup.controls['ruedos'].setValue("Ruedos nombre");
    this.firstFormGroup.controls['cassette'].setValue("Cassette nombre");
    this.firstFormGroup.controls['series'].setValue("Serie 1");
    this.firstFormGroup.controls['gearLevel'].setValue("gear level");
    this.firstFormGroup.controls['multiplication'].setValue("Multiplicacion nombre");
    this.firstFormGroup.controls['isModified'].setValue(true);
    this.firstFormGroup.controls['comments'].setValue("Comments 1");

    //Options
    this.firstFormGroup.controls['brand'].setValue(106);
    this.firstFormGroup.controls['genere'].setValue(72);
    this.firstFormGroup.controls['frameMaterial'].setValue(67);
    this.firstFormGroup.controls['breakType'].setValue(74);
    this.firstFormGroup.controls['talla'].setValue(108);
    this.firstFormGroup.controls['itemTypeCatId'].setValue(182);
    this.firstFormGroup.controls['wheelSize'].setValue(96);
  }

}
