import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InputFilter_header } from '../_models/input-filter-header-model';
import { InputFilter } from '../_models/input-filter-model';
import { UserItem } from '../_models/Item-model';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private http: HttpClient) {}

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

  itemGeneralRate(item: UserItem): string {
    
    let rate: number = (item.frameRate + item.ruedosRate + item.wheelsRate + item.componentsRate + 4) / 4;
    if( rate >= 19 && rate <= 20 ) {
      return "Excelente";
    } if ( rate >= 16 && rate <= 18 ) {
      return "Muy Buena";
    } if ( rate >= 13 && rate <= 15 ) {
      return "BUena";
    } if ( rate >= 10 && rate <= 12 ) {
      return "Regular";
    } else {
      return "Mala";
    }
  }

  mail() {
    let user = {
      name: "rodrig",
      email: "rodrigomirazo@gmail.com"
    }
    this.http.post("http://localhost:4200/sendmail", user).subscribe(
      data => {
        let res:any = data;
        console.log(
          `👏 > 👏 > 👏 > 👏 ${user.name} is successfully register and mail has been sent and the message id is ${res.messageId}`
        );
      },
      err => {
        console.log(err);
      },() => {
        
      }
    );
  }

}
