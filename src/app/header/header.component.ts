import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CategoryService } from '../category-tree/category.service';
import { FloatingCharsService } from '../floating-chars/floating-chars.service';
import { InputFilter_header } from '../_models/input-filter-header-model';
import { ItemCategoryModel } from '../_models/main-categories-model';
import { UserAddressJson } from '../_models/User-address-json-model';
import { AuthenticationService } from '../_services/authentication.service';
import { UserAddressService } from '../_services/user-address.service';
import { UtilsService } from '../_services/utils.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mountainFilter: string;
  urbanFilter: string;
  roadFilter: string;
  discoverFilter: string;
  searchFormGroup: FormGroup;
  saleEnable: boolean = false;
  profileComplete: boolean = false;
  
  /** Item Types */
  itemTypes: ItemCategoryModel[] = [];

  constructor(
    private floatingCharsService: FloatingCharsService,
    private categoryService: CategoryService,
    private utilsService: UtilsService,
    private router: Router,
    private _formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private addressService: UserAddressService,
  ) {
    //this.isUserValid();
    this.searchFormGroup = this._formBuilder.group({
      searchBar: new FormControl(''),
    });
  }

  ngOnInit() {
    this.getCategoryTypesLinkMountain();
    this.getCategoryTypesLinkRoad();
    this.getCategoryTypesLinkUrban();
    
    this.route.queryParams.subscribe(params => {
      if(params) {
        if(params.refresh) {
          if(params.refresh == "true" ) {
            this.saleEnable = true;
            window.location.replace(environment.indexPage + "?refresh=false");
            this.saleEnable = true;
          }
        }
      }
      this.authenticationService.tokenIsValid().subscribe( isValid => {
        if(isValid) {
          this.saleEnable = true;

          console.log("Get session user in header", this.authenticationService.getSessionUser());
          if(this.authenticationService.getSessionUser() != null) {
            this.addressService.getByUserName(this.authenticationService.getSessionUser().userName)
            .subscribe( (userAddress: UserAddressJson) => {
              if(userAddress.id) {
                this.profileComplete = true;
              }
            });
          }
          
        } else {
          this.saleEnable = false;
        }
      });

    });
  }

  submit() {
    
    this.router.navigate(['/market-place', 'null', this.searchFormGroup.value.searchBar ])
  }

  closeSession() {
    this.saleEnable = false;
    console.log("closeSession() from header component");
    this.authenticationService.logout();
    this.saleEnable = false;
    this.router.navigate(['/index'],  { queryParams: { refresh: false } } );
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
      console.log("isValid:", isUserToeknEnable);
      if(!isUserToeknEnable) {
        this.authenticationService.logout();
      }

      this.saleEnable = isUserToeknEnable;
    });
  }

  encodeFilter(inputFilter: InputFilter_header) : string {
    
    return this.utilsService.encodeBase64(inputFilter);
  }

}
