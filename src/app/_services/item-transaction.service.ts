import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserItem } from '../_models/Item-model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../_services/authentication.service';
import { ItemTransaction } from '../_models/Item-transaction-model';
import { ItemTransactionJson } from '../_models/Item-transaction-model-json';
import { ItemService } from '../item-list/item.service';
import { UserAddressService } from './user-address.service';
import { UserService } from './user.service';
import { ItemTransactionHistoryService } from './item-transaction-history.service';
import { ItemTransactionHistoryJson } from '../_models/item-transaction-history-model-json';

@Injectable({
  providedIn: 'root'
})
export class ItemTransactionService {

  private itemTransactionUri: string = environment.host + environment.baseUrl + environment.entity.itemTransaction;

  constructor(
    private httpService: HttpService,
    private http: HttpClient,
    private authService: AuthenticationService,
    private itemService: ItemService,
    private userAddressService: UserAddressService,
    private userService: UserService,
    private itemTransactionHistoryService: ItemTransactionHistoryService) { }

  get(itemTransactionId, adaptToJson: boolean) : Observable<ItemTransactionJson> {
      return this.httpService.getWithHeaders(this.itemTransactionUri + "/" + itemTransactionId, this.authService.getSessionUser());
  }

  save(itemTransaction: ItemTransactionJson) : Observable<ItemTransactionJson> {
    console.log("saving transaction");
    return this.httpService
    .postAuth(this.itemTransactionUri, itemTransaction, this.authService.getSessionUser() );
  }

  itemTransactionStepToInsert(itemTransactionId: number, action: string, paymentResponse: string) {
    let itemTransactHist: ItemTransactionHistoryJson = new ItemTransactionHistoryJson();
    itemTransactHist.$action = action;
    itemTransactHist.$description = paymentResponse;
    itemTransactHist.$itemTransactionId = itemTransactionId;

    return itemTransactHist;
  }

}
