import { Injectable } from '@angular/core';
import { WEB_SITE_SERVICE_COMMISION, WEB_SITE_PAYPAL_IVA, WEB_SITE_PAYPAL_PERCENTAJE, WEB_SITE_PAYPAL_PRICE, WEB_SITE_TAX } from './constants';

@Injectable({
  providedIn: 'root'
})
export class ItemComissionsService {

  constructor() { }

  paypalComission(itemPrice: number) : number {
    return (itemPrice * WEB_SITE_PAYPAL_PERCENTAJE + WEB_SITE_PAYPAL_PRICE) * WEB_SITE_PAYPAL_IVA;
  }

  webSiteComission(itemPrice: number) {
    if( itemPrice < 20000) {
      return .15 * itemPrice;
    } else if (itemPrice >= 20000 && itemPrice < 50000) {
      return .12 * itemPrice;
    } else if (itemPrice >= 50000 && itemPrice < 100000) {
      return .10 * itemPrice;
    } else { // >= 100, 000
      return .08 * itemPrice;
    }
  }

  webSiteTax(itemPrice: number) : number {
    return itemPrice * WEB_SITE_TAX;
  }

  itemTransactionTotal(itemPrice: number) : number {
    let total =
      this.webSiteComission(itemPrice) +
      this.paypalComission(itemPrice) +
      this.webSiteTax(itemPrice) +
      this.serviceCommision() +
      itemPrice;

    return total;
  }

  serviceCommision(itemPrice?: number) {
    return WEB_SITE_SERVICE_COMMISION;
  }

}
