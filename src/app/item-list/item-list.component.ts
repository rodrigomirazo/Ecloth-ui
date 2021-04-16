import { Component, OnInit, Input } from '@angular/core';
import { UserItem } from '../_models/Item-model';
import { ItemService } from '../_services/item.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { InputFilter } from '../_models/input-filter-model';
import { FloatingCharsService } from '../floating-chars/floating-chars.service';
import { ItemFloatingChars } from '../_models/item-floating-char';
import { ItemFloatingCharsCat } from '../_models/item-floating-char-cat';
import { ItemFloatingCharRel } from '../_models/item-floating-char-rel';
import { DatePipe } from '@angular/common';
import { environment } from 'src/environments/environment';
import { PageEvent } from '@angular/material/paginator';
import { UserService } from '../_services/user.service';
import { User } from '../_models/User-model';
import { AuthenticationService } from '../_services/authentication.service';
import { ItemImgUrls } from '../_models/Item-img-urls-model';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  providers: [ DatePipe ]
})
export class ItemListComponent implements OnInit {

  public server: string = environment.server;
  public uploadedImgDir: string = environment.uploadedImgDir;

  _inputFilter: any;
  _changeIncrement: number;

  items: UserItem[] = [];
  blobImgs: any[] = [];
  systDate: Date;

  // MatPaginator Output
  pageEvent: PageEvent;

  user: User;

  itemFavorite = false;
  favorites: number[] = [];

  constructor(
    private sanitizer: DomSanitizer,
    private itemService: ItemService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private floatingCharsService: FloatingCharsService,
    private datePipe: DatePipe,
    private userService: UserService,
    private authService: AuthenticationService,
    ) {
    
    this.pageEvent = new PageEvent();
    this.pageEvent.pageIndex = 0;
    this.pageEvent.pageSize = 9;
    this.pageEvent.length = 100;

    this.user = this.authService.getSessionUser();

    this.systDate = new Date();
    this.matIconRegistry.addSvgIcon("star_inactive",
    this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/market-place/icon_star_inactive.svg") );
    
    this.matIconRegistry.addSvgIcon("star_active",
    this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/market-place/icon_star_active.svg") );
    this.getfavorites();
  }

  ngOnInit() {
    
  }

  getfavorites() {
    this.userService.userFavorites(this.user).subscribe((items: any[]) => {
      
      this.favorites = [];
      console.log(items);
      items.forEach(item => {
        this.favorites = this.favorites.concat(item.id);
      });
    });
  }

  isFavorite(itemId: number) {
    if(this.favorites.includes(itemId)) {
      return true;
    }
    return false;
  }

  addTofavorites(itemId) {
    console.log("ading", this.user);
    this.userService.userAddFavorites(this.user, itemId).subscribe((items: any[]) => {
      this.itemFavorite = true;
      this.getfavorites();
    });
  }

  removeFromfavorites(itemId) {
    console.log("removing");
    this.userService.userRemoveFavorites(this.user, itemId).subscribe((items: any[]) => {
      this.itemFavorite = false;
      this.getfavorites();
    });
  }

  /** Detect Changes */
  @Input()
  public get changeIncrement(): number {
    return this._changeIncrement;
  }
  
  public set changeIncrement(value: number) {
    console.log("set changeIncrement");
    this._changeIncrement = value;
    this.resquestItems(null);
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    console.log("evnt page");
  }

  /** Handle Events for Item Category */
  @Input()
	public get inputFilter(): InputFilter {
		return this._inputFilter;
  }

	public set inputFilter(value: InputFilter) {
    this._inputFilter = value;
    this.resquestItems(null);
  }

  filterItemType(type: number) : string {
    if(!type) {
      return "";
    }
    
    const filterType = this.inputFilter.itemTypes.filter( typeCat => typeCat.id == type);

    if(filterType.length > 0) {
      return filterType[0].subCategoryName;
    } else {
      return "NA";
    }
  }

  filterCatalog(floatingCharName: string, itemFloatingChars: ItemFloatingCharRel[]): string {

    if(!itemFloatingChars) {
      return "NA";
    }
    let charFiltered: ItemFloatingCharRel[]  =
    itemFloatingChars.filter( floatChar => floatChar.floatingCharName == floatingCharName);

    if(charFiltered.length > 0) {
      return charFiltered[0].floatingCharCatName;
    } else {
      return "NA";
    }
  }

  imgUrl(imageUrl: string) {
    
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }

  /**
   * @description This Function requests the List of Items based on current Input Filters
   */
  resquestItems(setPageSizeOptionsInput: any) {
    this.floatingCharsService.getAll().subscribe( (itemFloatingChars: ItemFloatingChars[]) => {

      if(this.inputFilter.itemTypes) {
        if(this.inputFilter.itemTypes.length > 0) {
          
          this.itemService.getFilterItems(this.inputFilter)
          .subscribe((itemsResp: UserItem[]) => {

            this.items = [];
            let i = 0;
            this.pageEvent.length = itemsResp.length;
            let min = this.pageEvent.pageSize * (this.pageEvent.pageIndex);
            let max = this.pageEvent.pageSize * (this.pageEvent.pageIndex + 1);

            itemsResp.forEach(itemResp => {
              
              if ( i >= min && i < max ) {
                  this.items = this.items.concat(itemResp);
              }
              i++;
            });

            for (let i = 0; i < this.items.length; i++) {

              this.items[i].itemImgUrls.sort(function(a: ItemImgUrls, b: ItemImgUrls) {
                return a.imgUrl.localeCompare(b.imgUrl);
              });

              if(this.items[i].itemImgUrls[0]) {
                this.blobImgs = this.blobImgs.concat(this.items[i].itemImgUrls[0].imgUrl);
              } else {
                this.blobImgs = this.blobImgs.concat(null);
              }

              if(this.items[i].itemFloatingChars) {
                for (let j = 0; j < this.items[i].itemFloatingChars.length; j++) {
                  //console.log(this.items[i].itemFloatingChars[j]);

                  // a) find "Float Char"
                  let floatChar: ItemFloatingChars[] = itemFloatingChars.filter(floatChar => floatChar.floatingCharId == this.items[i].itemFloatingChars[j].floatingCharId );
                  // b) find "Float Char Value"
                  let floatCharCat: ItemFloatingCharsCat[] = [];

                  // c) verify if Char was found
                  if(floatChar.length > 0 && itemsResp[i].itemFloatingChars[j].floatingCharCatId) {
                    //console.log("\n floatChar.length", floatChar[0].catalogList, " VS ", itemsResp[i].itemFloatingChars[j].floatingCharsCatId);
                    floatCharCat = floatChar[0].catalogList.filter(floatCatChar => floatCatChar.charId == this.items[i].itemFloatingChars[j].floatingCharCatId );
                  }
                  
                  //console.log("floatCharCat: ", floatCharCat[0], floatChar[0]);
                  // d) assign using validations
                  this.items[i].itemFloatingChars[j].floatingCharName = (floatChar.length > 0) ? floatChar[0].floatingCharName : "N/A";
                  this.items[i].itemFloatingChars[j].floatingCharCatName = (floatCharCat.length > 0) ? floatCharCat[0].charName : "N/A";
                }
              }
            }
          });
        }
      }
    });
  }

  getImgBaseUrl() {
    return this.server + this.uploadedImgDir;
  }


  getImageFromService(imageName: string, imgIndex: number) {
    this.blobImgs[imgIndex] = imageName;
  }

  isRecent(date: string) : boolean {
    
    let inputDate: Date = new Date(date);
    var Difference_In_Time = this.systDate.getTime() - inputDate.getTime();
    
    return Difference_In_Time / (1000 * 3600 * 24) < 10 ? true : false;
  }


  
}
