import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http-service/http.service';
import { Observable } from 'rxjs';
import { ItemCategoryModel } from '../models/main-categories-model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private itemTypesUri: string = environment.host + environment.baseUrl + environment.entity.categoryType;

  constructor(private http: HttpService) { }

  getCategoryTypes(): Observable<ItemCategoryModel[]> {
    return this.http.get(this.itemTypesUri);
  }
}
