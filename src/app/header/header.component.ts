import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../category-tree/category.service';
import { FloatingCharsService } from '../floating-chars/floating-chars.service';
import { InputFilter_header } from '../_models/input-filter-header-model';
import { ItemCategoryModel } from '../_models/main-categories-model';
import { AuthenticationService } from '../_services/authentication.service';
import { UtilsService } from '../_services/utils.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private mountainFilter: string;
  private urbanFilter: string;
  private roadFilter: string;
  private discoverFilter: string;
  private searchFormGroup: FormGroup;
  private saleEnable: boolean = false;
  
  /** Item Types */
  private itemTypes: ItemCategoryModel[] = [];

  constructor(
    private floatingCharsService: FloatingCharsService,
    private categoryService: CategoryService,
    private utilsService: UtilsService,
    private router: Router,
    private _formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
    this.isUserValid();
    this.searchFormGroup = this._formBuilder.group({
      searchBar: new FormControl(''),
    });
  }

  ngOnInit() {
    this.getCategoryTypesLinkMountain();
    this.getCategoryTypesLinkRoad();
    this.getCategoryTypesLinkUrban();
    
    //private _router: Router
  }

  submit() {
    
    this.router.navigate(['/market-place', 'null', this.searchFormGroup.value.searchBar ])
  }

  getCategoryTypesLinkMountain(): void {
    this.categoryService.getCategoryTypes().subscribe((itemType: ItemCategoryModel[]) => {
      
      // Mountain
      const mountainBikes: ItemCategoryModel[] = itemType
          .filter(cat => cat.subCategoryName == "Bicicletas")[0].subCategories;
      const mountainIndex: number = mountainBikes
          .map(cat => cat.subCategoryName ).indexOf("Montaña");
      mountainBikes[mountainIndex].isSelected = true;
      this.mountainFilter = this.utilsService.encodeBase64(new InputFilter_header([], "", [], mountainBikes));
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
      this.roadFilter = this.utilsService.encodeBase64(new InputFilter_header([], "", [], roadBikes));
  
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
      this.urbanFilter = this.utilsService.encodeBase64(new InputFilter_header([], "", [], urbanBikes));
    });
  }

  isUserValid(): void {

    this.authenticationService.tokenIsValid().subscribe((isUserToeknEnable: boolean) => {
      // Urbain
      this.saleEnable = isUserToeknEnable;
    });
  }

  encodeFilter(inputFilter: InputFilter_header) : string {
    
    return this.utilsService.encodeBase64(inputFilter);
  }

}
