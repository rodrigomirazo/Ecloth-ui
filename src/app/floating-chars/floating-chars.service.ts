import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http-service/http.service';
import { ItemFloatingChars } from '../models/item-floating-char';
import { ItemFloatingCharsCat } from '../models/item-floating-char-cat';
import { ItemFloatingCharsEntity } from '../models/item-floating-char-entity';

@Injectable({
  providedIn: 'root'
})
export class FloatingCharsService {

  private floatingCharsUri: string = environment.host + environment.baseUrl + environment.entity.floatingChars;
  private floatingCharsCatUri: string = environment.host + environment.baseUrl + environment.entity.floatingCharsCat;

  constructor(private httpService: HttpService) { }

  getAll() : Observable<ItemFloatingChars[]> {
    return this.httpService.get(this.floatingCharsUri);
  }
  
  putChar(floatingChar: ItemFloatingCharsEntity) : Observable<ItemFloatingChars> {
    return this.httpService.put(this.floatingCharsUri, floatingChar);
  }

  postChar(floatingChar: ItemFloatingCharsEntity) : Observable<ItemFloatingChars> {
    return this.httpService.post(this.floatingCharsUri, floatingChar);
  }

  deleteChar(floatingCharId: number) : Observable<ItemFloatingChars> {
    return this.httpService.delete(this.floatingCharsUri + "?itemFloatingCharId=" + floatingCharId, {});
  }

  /**
   * Char Cat
  */

  putCharCat(floatingCharNameId: number, floatingCharCatNameId: number, floatingCharCatName: string) : Observable<ItemFloatingCharsCat> {
    return this.httpService.put(this.floatingCharsCatUri + "/" + floatingCharNameId, {
        "charId": floatingCharCatNameId,
        "charName": floatingCharCatName
    });
  }

  postCharCat(floatingCharNameId: number, floatingCharCatName: string) : Observable<ItemFloatingCharsCat> {
    return this.httpService.put(this.floatingCharsCatUri + "/" + floatingCharNameId, {
        "charName": floatingCharCatName
    });
  }

  deleteCharCat(floatingCharCatId: number) : void {
    this.httpService.delete(this.floatingCharsCatUri + "?itemFloatingCharCatId=" + floatingCharCatId, {});
  }

  
}
