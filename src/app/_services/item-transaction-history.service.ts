import { Injectable } from '@angular/core';
import { ItemTransactionHistory } from '../_models/item-transaction-history-model';
import { ItemTransactionHistoryJson } from '../_models/item-transaction-history-model-json';
import { ItemTransactionJson } from '../_models/Item-transaction-model-json';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ItemTransactionHistoryService {

  constructor() { }

  adaptItemTransactionHistoryToJson(itemTransactionHistory: ItemTransactionHistory) : ItemTransactionHistoryJson {

    let itemTransactionHistoryJson: ItemTransactionHistoryJson = new ItemTransactionHistoryJson();

    itemTransactionHistoryJson.$id = itemTransactionHistory.$id;
    itemTransactionHistoryJson.$itemTransactionId = itemTransactionHistory.$itemTransactionId;
    itemTransactionHistoryJson.$action = itemTransactionHistory.$action;
    itemTransactionHistoryJson.$description = itemTransactionHistory.$description;

    return itemTransactionHistoryJson;
  }

  adaptItemTransactionHistoryToJsonList(itemTransactionHistory: ItemTransactionHistory[]) : ItemTransactionHistoryJson[] {

    let itemTransactionHistoryJsonList: ItemTransactionHistoryJson[] = itemTransactionHistory
      .map( (itemTransactionHistory: ItemTransactionHistory) => this.adaptItemTransactionHistoryToJson(itemTransactionHistory));

    return itemTransactionHistoryJsonList;
  }

  adaptItemTransactionHistoryToModel(itemTransactionHistoryJson: ItemTransactionHistoryJson) : ItemTransactionHistory {

    let itemTransactionHistory: ItemTransactionHistory = new ItemTransactionHistory();

    itemTransactionHistory.$id = itemTransactionHistoryJson.$id;
    itemTransactionHistory.$itemTransactionId = itemTransactionHistoryJson.$itemTransactionId;
    itemTransactionHistory.$action = itemTransactionHistoryJson.$action;
    itemTransactionHistory.$description = itemTransactionHistoryJson.$description;

    return itemTransactionHistory;
  }

  adaptItemTransactionHistoryToModelList(itemTransactionHistory: ItemTransactionHistoryJson[]) : ItemTransactionHistory[] {

    let itemTransactionHistoryList: ItemTransactionHistory[] = itemTransactionHistory
      .map( (itemTransactionHistory: ItemTransactionHistoryJson) => this.adaptItemTransactionHistoryToModel(itemTransactionHistory));

    return itemTransactionHistoryList;
  }

}
