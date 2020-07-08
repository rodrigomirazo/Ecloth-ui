import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Item } from '../models/Item-model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemUri: string = environment.host + environment.baseUrl + environment.entity.item;

  constructor(private httpService: HttpService) { }

  get() : Observable<Item[]> {
    return this.httpService.get(this.itemUri);
  }

  put(item: Item) : Observable<Item> {
    return this.httpService.put(this.itemUri, item);
  }

  delete(item: Item) : Observable<Item> {
    return this.httpService.delete(this.itemUri, item);
  }

}
