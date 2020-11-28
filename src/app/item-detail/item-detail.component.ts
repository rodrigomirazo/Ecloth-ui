import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../category-tree/category.service';
import { FloatingCharsService } from '../floating-chars/floating-chars.service';
import { ItemService } from '../item-list/item.service';
import { ItemFloatingChars } from '../_models/item-floating-char';
import { ItemFloatingCharsCat } from '../_models/item-floating-char-cat';
import { ItemFloatingCharRel } from '../_models/item-floating-char-rel';
import { ItemImgUrls } from '../_models/Item-img-urls-model';
import { UserItem } from '../_models/Item-user-model';
import { ItemCategoryModel } from '../_models/main-categories-model';

@Component({
  selector: 'item-detail',
  templateUrl: './item-detail.component.html?v=${new Date().getTime()}',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  @Input()
  private itemInput: UserItem;

  @Input()
  private increment: number;

  public url: SafeResourceUrl;

  private item: UserItem;
  private itemFloatingChars: ItemFloatingChars[];
  private itemType: ItemCategoryModel[];
  private images: any[] = [];
  private blobImgs: any[] = [];
  private imageRows: number[] = [];
  private principleImg: any;

  constructor(private itemService: ItemService, private route: ActivatedRoute,
    private floatingCharsService: FloatingCharsService,
    private categoryService: CategoryService,
    private sanitizer: DomSanitizer) {
    
  }

  ngOnInit() {
   //categories 
    this.getCategoryTypes();
    
    //floating chars
    this.floatingCharsService.getAll().subscribe( (itemFloatingChars: ItemFloatingChars[]) => {
      this.itemFloatingChars = itemFloatingChars;

      //uri params
      this.route.params.subscribe(params => {
        if(params.itemId) {
          console.log("at if");
          this.itemService.getById(params.itemId).subscribe( (itemResponse: UserItem) => {
            this.assignFloatingChars(itemResponse, itemFloatingChars);
            this.orderImages(itemResponse);
          });
        } else {
          this.itemService.getById( parseInt(this.itemInput.id) ).subscribe( (itemResponse: UserItem) => {
            
            this.assignFloatingChars(itemResponse, itemFloatingChars);
            this.orderImages(itemResponse);
          });
        }

      });
    });
  }

  orderImages(itemResponse: UserItem) {
    
    // Sort image array
    itemResponse.itemImgUrls.sort(function(a: ItemImgUrls, b: ItemImgUrls) {
      return b.id - a.id;
    });
    
    // setup image array
    let imgRowIndx = 0;
    itemResponse.itemImgUrls.forEach( (img: any) => {

      this.images = this.images.concat( img.imgUrl );
      this.blobImgs = this.blobImgs.concat(null);
      if(img.id % 2) {
        this.imageRows = this.imageRows.concat(imgRowIndx);
        imgRowIndx = imgRowIndx + 2;
      }
    });
    
    let i = 0;
    this.images.forEach(image => {
      console.log(image, i);
      this.getImageFromService(image, i);
      i++;
    });
  }

  imgUrl(imageUrl: any) {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }

  setPrincipalImage(imageIndex) {
    this.principleImg = this.blobImgs[imageIndex];
  }

  assignFloatingChars(itemResponse: UserItem, itemFloatingChars: ItemFloatingChars[]) {
    this.item = itemResponse;
    if(this.item.itemFloatingChars) {
      for (let j = 0; j < this.item.itemFloatingChars.length; j++) {
        //console.log(this.items[i].itemFloatingChars[j]);

        // a) find "Float Char"
        let floatChar: ItemFloatingChars[] = itemFloatingChars.filter(floatChar => floatChar.floatingCharId == this.item.itemFloatingChars[j].floatingCharId );
        // b) find "Float Char Value"
        let floatCharCat: ItemFloatingCharsCat[] = [];

        // c) verify if Char was found
        if(floatChar.length > 0 && this.item.itemFloatingChars[j].floatingCharCatId) {
          //console.log("\n floatChar.length", floatChar[0].catalogList, " VS ", itemsResp[i].itemFloatingChars[j].floatingCharsCatId);
          floatCharCat = floatChar[0].catalogList.filter(floatCatChar => floatCatChar.charId == this.item.itemFloatingChars[j].floatingCharCatId );
        }
        
        //console.log("floatCharCat: ", floatCharCat[0], floatChar[0]);
        // d) assign using validations
        this.item.itemFloatingChars[j].floatingCharName = (floatChar.length > 0) ? floatChar[0].floatingCharName : "N/A";
        this.item.itemFloatingChars[j].floatingCharCatName = (floatCharCat.length > 0) ? floatCharCat[0].charName : "N/A";
      }
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

  getCategoryTypes(): void {
    this.categoryService.getCategoryTypes().subscribe((itemType: ItemCategoryModel[]) => {
      this.itemType = itemType.filter(cat => cat.subCategoryName == "Bicicletas")[0].subCategories;
      console.log("item types = ", this.itemType);
    });
  }

  filterItemType(type: number) : string {
    if(!type) {
      return "";
    }
    
    const filterType = this.itemType.filter( typeCat => typeCat.id == type);

    if(filterType.length > 0) {
      return filterType[0].subCategoryName;
    } else {
      return "NA";
    }
  }

  imageToShow: any;
  isImageLoading: boolean;

  getImageFromService(imageName: string, imgIndex: number) {
    console.log("imageName: ", imageName);
    this.isImageLoading = true;
    this.itemService.getImage(imageName).subscribe(data => {
      this.createImageFromBlob(data, imgIndex);
      this.isImageLoading = false;
    }, error => {
      this.isImageLoading = false;
      console.log(error);
    });
  }

  createImageFromBlob(image: Blob, imgIndex: number) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {

      this.blobImgs[imgIndex] = reader.result;
      if(imgIndex == 0) {
        this.principleImg = reader.result;
      }
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

}
