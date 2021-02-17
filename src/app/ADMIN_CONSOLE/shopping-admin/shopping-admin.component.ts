import { Component, Input, OnInit } from '@angular/core';
import { FloatingCharsService } from 'src/app/floating-chars/floating-chars.service';
import { ItemTransactionJson } from 'src/app/_models/Item-transaction-model-json';
import { ItemCategoryModel } from 'src/app/_models/main-categories-model';
import { User } from 'src/app/_models/User-model';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { ItemTransactionService } from 'src/app/_services/item-transaction.service';

@Component({
  selector: 'shopping-admin',
  templateUrl: './shopping-admin.component.html',
  styleUrls: ['./shopping-admin.component.css']
})
export class ShoppingAdminComponent implements OnInit {

  @Input()
  public itemType: ItemCategoryModel[];
  
  public itemsTranaction: ItemTransactionJson[];
  public items: ItemTransactionJson[];
  private user: User;

  constructor(
    private authService: AuthenticationService,
    private itemTransactService: ItemTransactionService,
    private floatingCharsService: FloatingCharsService,
  ) { }

  ngOnInit(): void {
    console.log("itemType", this.itemType);
    this.user = this.authService.getSessionUser();
    //TODO: get sopping admin transactions
    this.itemTransactService.getByUserBuyer().subscribe( (itemsResp: ItemTransactionJson[]) => {
      this.items = itemsResp;
    });
  }


}
