import { Injectable } from '@angular/core';
import { InputFilter_header } from '../models/input-filter-header-model';
import { InputFilter } from '../models/input-filter-model';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  encodeBase64(inputFilter: InputFilter_header) {

    let inputFiltersStr: string = JSON.stringify(inputFilter);

    inputFiltersStr = inputFiltersStr.replace("_searchBar",     "searchBar");
    inputFiltersStr = inputFiltersStr.replace("_years",         "years");
    inputFiltersStr = inputFiltersStr.replace("_itemTypes",     "itemTypes");
    inputFiltersStr = inputFiltersStr.replace("_itemFloatingChars", "itemFloatingChars");
    
    return btoa(inputFiltersStr);
  }
  
  decodeBase64(inputFilterDecoded: string) : any {
    let atobResult: string = "";
    try {
      atobResult = atob(inputFilterDecoded);

      const inputFilter: InputFilter = JSON.parse(atobResult);

      return inputFilter;

    } catch(e) {
      console.log("catch error", new InputFilter_header([], "", [], []));
      
      return new InputFilter_header([], "", [], []);
    }
  }

}
