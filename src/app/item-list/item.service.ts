import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { UserItem } from '../models/Item-user-model';
import { InputFilter } from '../models/input-filter-model';
import { UserItemJson } from '../models/Item-user-json-model';
import { FormGroup } from '@angular/forms';

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
      return this.httpService.post(this.itemUri, item);
    }
    return null;
  }

  delete(item: UserItem) : Observable<UserItem> {
    return this.httpService.delete(this.itemUri, item);
  }

  adaptFormToItem(firstFormGroup: FormGroup): UserItem {
    let userItem: UserItem = new UserItem();
    userItem.id                  = firstFormGroup.value.id;
    userItem.statusId            = firstFormGroup.value.statusId;
    userItem.itemColorId         = firstFormGroup.value.itemColorId;
    userItem.itemTypeCatId       = firstFormGroup.value.itemTypeCatId;
    userItem.itemTransactionId   = firstFormGroup.value.itemTransactionId;
    userItem.name                = firstFormGroup.value.name;
    userItem.price               = firstFormGroup.value.price;
    userItem.originalPrice       = firstFormGroup.value.originalPrice;
    userItem.discount            = firstFormGroup.value.discount;
    userItem.description         = firstFormGroup.value.description;
    userItem.fleetCost           = firstFormGroup.value.fleetCost;
    userItem.sizeId              = firstFormGroup.value.sizeId;
    userItem.lastLevelCategoryId = firstFormGroup.value.lastLevelCategoryId;
    userItem.user                = firstFormGroup.value.user;
    //Floating Cahrs are diferent...
    //userItem.itemFloatingChars   = firstFormGroup.value.itemFloatingChars;
    userItem.backRear            = firstFormGroup.value.backRear;
    userItem.frontRear            = firstFormGroup.value.frontRear;
    userItem.cassette             = firstFormGroup.value.cassette;
    userItem.model               = firstFormGroup.value.model;
    userItem.year                = firstFormGroup.value.year;
    userItem.suspension          = firstFormGroup.value.suspension;
    userItem.ruedos              = firstFormGroup.value.ruedos;
    userItem.series              = firstFormGroup.value.series;
    userItem.gearLevel           = firstFormGroup.value.gearLevel;
    userItem.multiplication      = firstFormGroup.value.multiplication;
    userItem.isModified          = firstFormGroup.value.isModified;
    userItem.comments            = firstFormGroup.value.comments;
    userItem.frameRate           = firstFormGroup.value.frameRate;
    userItem.ruedosRate          = firstFormGroup.value.ruedosRate;
    userItem.wheelsRate          = firstFormGroup.value.wheelsRate;
    userItem.componentsRate      = firstFormGroup.value.componentsRate;

    return userItem;
  }

  adaptUserItemToJson(item: UserItem): UserItemJson {

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
    userItemJson.$user                = item.user;
    userItemJson.$itemFloatingChars   = item.itemFloatingChars;
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
