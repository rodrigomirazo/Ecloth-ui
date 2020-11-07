import { Injectable } from '@angular/core';
import { InputFilter } from '../models/input-filter-model';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  encodeBase64(inputFilter: InputFilter) {

    const inputFiltersStr = JSON.stringify(inputFilter);
    return btoa(inputFiltersStr);
  }
  
  decodeBase64(inputFilterDecoded: string) : InputFilter {
    let atobResult: string = "";
    try {
      atobResult = atob(inputFilterDecoded);
      
      const inputFilter: InputFilter = JSON.parse(atobResult);

      return inputFilter;

    } catch(e) {
      return new InputFilter([], "", [], []);
    }
  }

}
