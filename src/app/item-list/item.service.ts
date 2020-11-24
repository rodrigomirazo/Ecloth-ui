import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { UserItem } from '../models/Item-user-model';
import { InputFilter } from '../models/input-filter-model';
import { UserItemJson } from '../models/Item-user-json-model';
import { FormGroup } from '@angular/forms';
import { ItemFloatingCharRelJson } from '../models/item-floating-char-rel-json';
import { UserJson } from '../models/Item-user-json';
import { User } from '../models/Item-user';
import { ItemImgUrlsJson } from '../models/Item-img-urls-json-model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemUri: string = environment.host + environment.baseUrl + environment.entity.item;
  private filterItemUri: string = environment.host + environment.baseUrl + environment.entity.filterItems;
  
  constructor(private httpService: HttpService) { }

  get(categoryId: number) : Observable<UserItem[]> {
    const catParam = "categoryId=" + categoryId;
    return this.httpService.get(this.itemUri + "?" + catParam);
  }

  getFilterItems(itemFilter: InputFilter) : Observable<UserItem[]> {
    
    return this.httpService.post(this.filterItemUri, itemFilter);
  }
  getById(itemId: number) : Observable<UserItem> {
    return this.httpService.get(this.itemUri + "/" + itemId);
  }

  getByUser(userId: number) : Observable<UserItem[]> {
    const catParam = "userId=" + userId;
    return this.httpService.get(this.itemUri + "/user/" + userId);
  }

  post(item: UserItem, adaptToJson?: boolean) : Observable<UserItem> {

    if(!adaptToJson) {
      return this.httpService.post(this.itemUri, item);
    }
    if(adaptToJson) {
      let itemJson = this.adaptUserItemToJson(item);
      return this.httpService.post(this.itemUri, itemJson);
    }
    return null;
  }

  delete(item: UserItem) : Observable<UserItem> {
    return this.httpService.delete(this.itemUri, item);
  }

  adaptFormToItem(firstFormGroup: FormGroup, userItem: UserItem): UserItem {

    userItem.backRear = 		firstFormGroup.value.backRear;
    userItem.model = 			firstFormGroup.value.model;
    userItem.frontRear = 		firstFormGroup.value.frontRear;
    userItem.year = 			firstFormGroup.value.year;
    userItem.suspension = 		firstFormGroup.value.suspension;
    userItem.itemTypeCatId = 	firstFormGroup.value.itemTypeCatId;
    userItem.ruedos = 			firstFormGroup.value.ruedos;
    userItem.cassette = 		firstFormGroup.value.cassette;
    userItem.series = 			firstFormGroup.value.series;
    userItem.gearLevel = 		firstFormGroup.value.gearLevel;
    userItem.multiplication = 	firstFormGroup.value.multiplication;
    userItem.isModified = 		firstFormGroup.value.isModified;
    userItem.comments = 		firstFormGroup.value.comments;

    return userItem;
  }

  adaptUserItemToJson(item: UserItem): UserItemJson {

    let userJson: UserJson = new UserJson();
    userJson.$id = item.user.id;

    /** Floating Chars */
    let floatCharList: ItemFloatingCharRelJson[] = [];
    item.itemFloatingChars.forEach(itemFloatingChars => {
      let floatCharDto: ItemFloatingCharRelJson = new ItemFloatingCharRelJson();
      floatCharDto.$floatingCharCatId = itemFloatingChars.floatingCharCatId;
      floatCharDto.$floatingCharCatName = itemFloatingChars.floatingCharCatName;
      floatCharDto.$floatingCharId = itemFloatingChars.floatingCharId;
      floatCharDto.$floatingCharName = itemFloatingChars.floatingCharName;
      floatCharList = floatCharList.concat(floatCharDto);
    });

    /** Img URLs */
    let itemImgUrls: ItemImgUrlsJson[] = [];
    item.itemImgUrls.forEach(itemImgUrl => {
      let itemImgUrlJson: ItemImgUrlsJson = new ItemImgUrlsJson();
      itemImgUrlJson.$itemId = itemImgUrl.itemId;
      itemImgUrlJson.$id = itemImgUrl.id;
      itemImgUrlJson.$createdTime = itemImgUrl.createdTime;
      itemImgUrlJson.$imgServer = itemImgUrl.imgServer;
      itemImgUrlJson.$imgUrl = itemImgUrl.imgUrl;
      
      itemImgUrls = itemImgUrls.concat(itemImgUrlJson);
    });

    let userItemJson: UserItemJson = new UserItemJson();
    userItemJson.$id                  = item.id;
    userItemJson.$statusId            = item.statusId;
    userItemJson.$itemColorId         = item.itemColorId;
    userItemJson.$itemTypeCatId       = item.itemTypeCatId;
    userItemJson.$itemTransactionId   = item.itemTransactionId;
    userItemJson.$name                = item.name;
    userItemJson.$price               = item.price;
    userItemJson.$originalPrice       = item.originalPrice;
    userItemJson.$discount            = item.discount;
    userItemJson.$description         = item.description;
    userItemJson.$fleetCost           = item.fleetCost;
    userItemJson.$sizeId              = item.sizeId;
    userItemJson.$lastLevelCategoryId = item.lastLevelCategoryId;
    userItemJson.$user                = userJson;
    userItemJson.$itemImgUrls         = itemImgUrls;
    userItemJson.$itemFloatingChars   = floatCharList;
    userItemJson.$backRear            = item.backRear;
    userItemJson.$model               = item.model;
    userItemJson.$year                = item.year;
    userItemJson.$suspension          = item.suspension;
    userItemJson.$ruedos              = item.ruedos;
    userItemJson.$cassette             = item.cassette;
    userItemJson.$series              = item.series;
    userItemJson.$gearLevel           = item.gearLevel;
    userItemJson.$multiplication      = item.multiplication;
    userItemJson.$isModified          = item.isModified;
    userItemJson.$comments            = item.comments;
    userItemJson.$frameRate           = item.frameRate;
    userItemJson.$ruedosRate          = item.ruedosRate;
    userItemJson.$wheelsRate          = item.wheelsRate;
    userItemJson.$componentsRate      = item.componentsRate;

    return userItemJson;
  }

}
