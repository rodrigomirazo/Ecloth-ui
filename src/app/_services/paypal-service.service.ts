import { Injectable } from '@angular/core';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { ItemTransactionHistory } from '../_models/item-transaction-history-model';
import { ItemTransactionJson } from '../_models/Item-transaction-model-json';

@Injectable({
  providedIn: 'root'
})
export class PaypalServiceService {

  constructor() { }

  initPaypalInstance(itemTransact: ItemTransactionJson, clientId: string, totalBalance: string) : IPayPalConfig {

    let payPalConfig: IPayPalConfig;

    payPalConfig = {
      currency: 'MXN',
      clientId: 'AXDrazmijozxI9vYtlU8JbNIZORPtmfYmCYV6-M1lfKXnHuyfHhd7n8qq-hK2nRKvC7U8bJFfKuAladM',

      createOrderOnClient: (data) => <ICreateOrderRequest> {
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'MXN',
              value: totalBalance,
              breakdown: {
                item_total: {
                  currency_code: 'MXN',
                  value: totalBalance
                }
              }
            },
            items: [
              {
                name: itemTransact.$item.model,
                quantity: '1',
                category: 'PHYSICAL_GOODS',
                unit_amount: {
                  currency_code: 'MXN',
                  value: totalBalance,
                },
              }
            ]
          }
        ]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then(details => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
        });
      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: err => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    };

    return payPalConfig;
  }
}
