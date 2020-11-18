import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { UserItem } from '../models/Item-user-model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemUri: string = environment.host + environment.baseUrl + environment.entity.item;

  constructor(private httpService: HttpService) { }

  get(categoryId: number) : Observable<UserItem[]> {
    const catParam = "categoryId=" + categoryId;
    return this.httpService.get(this.itemUri + "?" + catParam);
  }

  getById(itemId: number) : Observable<UserItem> {
    return this.httpService.get(this.itemUri + "/" + itemId);
  }

  getByUser(userId: number) : Observable<UserItem[]> {
    const catParam = "userId=" + userId;
    return this.httpService.get(this.itemUri + "/user/" + userId);
  }

  post(item: UserItem) : Observable<UserItem> {
    return this.httpService.post(this.itemUri, item);
  }

  delete(item: UserItem) : Observable<UserItem> {
    return this.httpService.delete(this.itemUri, item);
  }

}
