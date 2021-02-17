import { Component, Input, OnInit } from '@angular/core';
import { ItemTransactionJson } from 'src/app/_models/Item-transaction-model-json';
import { ItemCategoryModel } from 'src/app/_models/main-categories-model';
import { User } from 'src/app/_models/User-model';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { ItemTransactionService } from 'src/app/_services/item-transaction.service';

@Component({
  selector: 'user-sales',
  templateUrl: './user-sales.component.html',
  styleUrls: ['./user-sales.component.css']
})
export class UserSalesComponent implements OnInit {

  @Input()
  public itemType: ItemCategoryModel[];
  
  public items: ItemTransactionJson[];
  private user: User

  constructor(
    private authService: AuthenticationService,
    private itemTransactService: ItemTransactionService,
  ) { }

  ngOnInit(): void {

    this.user = this.authService.getSessionUser();
    //TODO: get User sales
    this.itemTransactService.getByUserVendor().subscribe( (itemsResp: ItemTransactionJson[]) => {
      this.items = itemsResp;
    });
  }

}
