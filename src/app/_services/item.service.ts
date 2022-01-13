import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { UserItem } from '../_models/Item-model';
import { InputFilter } from '../_models/input-filter-model';
import { UserItemJson } from '../_models/Item-json-model';
import { FormGroup } from '@angular/forms';
import { ItemFloatingCharRelJson } from '../_models/item-floating-char-rel-json';
import { UserJson } from '../_models/User-json-model';
import { User } from '../_models/User-model';
import { ItemImgUrlsJson } from '../_models/Item-img-urls-json-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';
import { ItemFloatingCharRel } from '../_models/item-floating-char-rel';
import { ItemImgUrls } from '../_models/Item-img-urls-model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemUri: string = environment.host + environment.baseUrl + environment.entity.item;
  private itemDiagnostUri: string = environment.host + environment.baseUrl + environment.entity.itemDiagnost;
  
  private approvedOrRejectedUri: string = environment.host + environment.baseUrl + environment.entity.item + environment.entity.approvedOrRejected;
  private notYetApprovedUri: string = environment.host + environment.baseUrl + environment.entity.item + environment.entity.notYetApproved;
  
  private filterItemUri: string = environment.host + environment.baseUrl + environment.entity.filterItems;
  private itemBytesImage: string = environment.host + environment.baseUrl + environment.entity.itemBytesImage;
  
  constructor(private httpService: HttpService, private http: HttpClient, private authService: AuthenticationService) { }

  get(categoryId: number) : Observable<UserItem[]> {
    const catParam = "categoryId=" + categoryId;
    
    return this.httpService.get(this.itemUri + "?" + catParam)
      .pipe( map(
          (items: UserItem[]) => {
            return items.map( (item: UserItem) => {return this.itemScore(item);} );
          })
      );
  }

  getImage(imgName: string) : Observable<Blob> {
    return this.http.get(this.itemBytesImage + "/" + imgName, { responseType: 'blob' });
  }

  getFilterItems(itemFilter: InputFilter) : Observable<UserItem[]> {
    
    return this.httpService.post(this.filterItemUri, itemFilter).pipe( map(
      (items: UserItem[]) => {
        return items.map( (item: UserItem) => {return this.itemScore(item);} );
      })
    );
  }
  getById(itemId: number) : Observable<UserItem> {
    return this.httpService.get(this.itemUri + "/" + itemId).pipe( map(
      (item: UserItem) => {return this.itemScore(item); } ));
  }

  getByUser(userId: number) : Observable<UserItem[]> {
    const catParam = "userId=" + userId;
    return this.httpService.get(this.itemUri + "/user/" + userId).pipe( map(
      (items: UserItem[]) => {
        return items.map( (item: UserItem) => {return this.itemScore(item) } )
      })
    );
  }

  post(item: UserItem, adaptToJson?: boolean) : Observable<UserItem> {

    if(!adaptToJson) {
      return this.httpService.postAuth(this.itemUri + "/" + this.authService.getSessionUser().id, item, this.authService.getSessionUser() ).pipe( map(
        (item: UserItem) => {return this.itemScore(item); } ));
    }
    if(adaptToJson) {
      let itemJson = this.adaptUserItemToJson(item);
      return this.httpService.postAuth(this.itemUri + "/" + this.authService.getSessionUser().id, itemJson, this.authService.getSessionUser()).pipe( map(
        (item: UserItem) => {return this.itemScore(item); } ));
    }
    return null;
  }

  delete(item: UserItem) : Observable<UserItem> {
    return this.httpService.delete(this.itemUri, item);
  }

  diagnost(itemId: string, approved: boolean, comments: string) : Observable<UserItem> {

    const params = '/' + itemId + '/' + approved + '/' + btoa(comments);
    console.log("params",params);

    return this.httpService.postAuth(this.itemDiagnostUri + params, {}, this.authService.getSessionUser()).pipe( map(
      (item: UserItem) => {return this.itemScore(item); } ));
  }

  // Appoved or Rejected Items
  approvedOrRejected(diagnostApproved: boolean, start: Date, end: Date, pageNum: number, pageSize: number) : Observable<UserItem[]> {

    //2020-06-01T00:00:15

    const startFormat = start.toISOString().substr(0, start.toISOString().indexOf("."));
    const endFormat = end.toISOString().substr(0, end.toISOString().indexOf("."));
    
    const params =  "?diagnostApproved=" + diagnostApproved +
                    "&start=" + startFormat + "&end=" + endFormat +
                    "&pageNum=" + pageNum + "&pageSize=" + pageSize;

    return this.httpService.get(this.approvedOrRejectedUri + params).pipe( map(
      (items: UserItem[]) => {
        return items.map( (item: UserItem) => {return this.itemScore(item) } )
      })
    );
  }

  // Appoved or Rejected Items
  notYetApproved(start: Date, end: Date, pageNum: number, pageSize: number) : Observable<UserItem[]> {
    
    //2020-06-01T00:00:15
    //2021-01-17T23:29:20.585Z
    
    const startFormat = start.toISOString().substr(0, start.toISOString().indexOf("."));
    const endFormat = end.toISOString().substr(0, end.toISOString().indexOf("."));

    console.log("toISOString: " + start.toISOString().replace("Z", "") );
    
    const params = "?start=" + startFormat + "&end=" + endFormat + "&pageNum=" + pageNum + "&pageSize=" + pageSize;

    return this.httpService.get(this.notYetApprovedUri + params).pipe( map(
      (items: UserItem[]) => {
        return items.map( (item: UserItem) => {return this.itemScore(item) } )
      })
    );
  }
  
  adaptFormToItem(firstFormGroup: FormGroup, userItem: UserItem): UserItem {
    
    userItem.backRear = 		firstFormGroup.value.backRear;
    userItem.model = 			firstFormGroup.value.model;
    userItem.frontRear = 		firstFormGroup.value.frontRear;
    userItem.year = 			firstFormGroup.value.year;
    userItem.suspension = 		firstFormGroup.value.suspension;
    userItem.backSuspension = 		firstFormGroup.value.backSuspension;
    
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
    userItemJson.$frontRear           = item.frontRear;
    userItemJson.$model               = item.model;
    userItemJson.$year                = item.year;
    userItemJson.$suspension          = item.suspension;
    userItemJson.$backSuspension      = item.backSuspension;
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


  adaptUserItemToModel(userItemJson: UserItemJson): UserItem {

    let userJson: User = new User();
    userJson.id = userItemJson.$user.$id;

    /** Floating Chars */
    let floatCharList: ItemFloatingCharRel[] = [];

    userItemJson.$itemFloatingChars.forEach(itemFloatingChars => {
      let floatCharDto: ItemFloatingCharRel = new ItemFloatingCharRel();
      floatCharDto.floatingCharCatId = itemFloatingChars.$floatingCharCatId;
      floatCharDto.floatingCharCatName = itemFloatingChars.$floatingCharCatName;
      floatCharDto.floatingCharId = itemFloatingChars.$floatingCharId;
      floatCharDto.floatingCharName = itemFloatingChars.$floatingCharName;
      floatCharList = floatCharList.concat(floatCharDto);
    });

    /** Img URLs */
    let itemImgUrls: ItemImgUrls[] = [];
    userItemJson.$itemImgUrls.forEach(itemImgUrl => {
      
      let itemImgUrlJson: ItemImgUrls = new ItemImgUrls();
      itemImgUrlJson.itemId = itemImgUrl.$itemId;
      itemImgUrlJson.id = itemImgUrl.$id;
      itemImgUrlJson.createdTime = itemImgUrl.$createdTime;
      itemImgUrlJson.imgServer = itemImgUrl.$imgServer;
      itemImgUrlJson.imgUrl = itemImgUrl.$imgUrl;
      
      itemImgUrls = itemImgUrls.concat(itemImgUrlJson);
    });

    let userItem: UserItem = new UserItem();
    
    userItem.user                = userJson;
    userItem.itemImgUrls         = itemImgUrls;
    userItem.itemFloatingChars   = floatCharList;

    userItem.id                  = userItemJson.$id;
    userItem.statusId            = userItemJson.$statusId;
    userItem.itemColorId         = userItemJson.$itemColorId;
    userItem.itemTypeCatId       = userItemJson.$itemTypeCatId;
    userItem.itemTransactionId   = userItemJson.$itemTransactionId;
    userItem.name                = userItemJson.$name;
    userItem.price               = userItemJson.$price;
    userItem.originalPrice       = userItemJson.$originalPrice;
    userItem.discount            = userItemJson.$discount;
    userItem.description         = userItemJson.$description;
    userItem.fleetCost           = userItemJson.$fleetCost;
    userItem.sizeId              = userItemJson.$sizeId;
    userItem.lastLevelCategoryId = userItemJson.$lastLevelCategoryId;
    userItem.backRear            = userItemJson.$backRear;
    userItem.frontRear           = userItemJson.$frontRear;
    userItem.model               = userItemJson.$model;
    userItem.year                = userItemJson.$year;
    userItem.suspension          = userItemJson.$suspension;
    userItem.backSuspension      = userItemJson.$backSuspension;
    userItem.ruedos              = userItemJson.$ruedos;
    userItem.cassette            = userItemJson.$cassette;
    userItem.series              = userItemJson.$series;
    userItem.gearLevel           = userItemJson.$gearLevel;
    userItem.multiplication      = userItemJson.$multiplication;
    userItem.isModified          = userItemJson.$isModified;
    userItem.comments            = userItemJson.$comments;
    userItem.frameRate           = userItemJson.$frameRate;
    userItem.ruedosRate          = userItemJson.$ruedosRate;
    userItem.wheelsRate          = userItemJson.$wheelsRate;
    userItem.componentsRate      = userItemJson.$componentsRate;

    return userItem;
  }

  itemScore(item: UserItem) {

    let rate: number = (item.frameRate + item.ruedosRate + item.wheelsRate + item.componentsRate + 4);

    if( rate >= 19 ) {
        item.scoreName = "Excelente";
        item.score = 4;
    } if ( rate >= 16 && rate <= 18 ) {
        item.scoreName =  "Muy Buena";
        item.score = 3;
    } if ( rate >= 13 && rate <= 15 ) {
        item.scoreName =  "Buena";
        item.score = 2;
    } if ( rate >= 10 && rate <= 12 ) {
        item.scoreName =  "Regular";
        item.score = 1;
    }

    if ( rate <= 9 ){
        item.scoreName =  "Mala";
        item.score = 0;
    }
    return item;
  }

}
