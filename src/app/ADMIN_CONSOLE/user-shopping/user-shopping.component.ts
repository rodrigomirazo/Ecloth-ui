import { Component, Input, OnInit } from '@angular/core';
import { FloatingCharsService } from 'src/app/floating-chars/floating-chars.service';
import { ItemTransactionJson } from 'src/app/_models/Item-transaction-model-json';
import { ItemCategoryModel } from 'src/app/_models/main-categories-model';
import { User } from 'src/app/_models/User-model';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { ItemTransactionService } from 'src/app/_services/item-transaction.service';

@Component({
  selector: 'user-shopping',
  templateUrl: './user-shopping.component.html',
  styleUrls: ['./user-shopping.component.css']
})
export class UserShoppingComponent implements OnInit {

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

    this.user = this.authService.getSessionUser();
    this.itemTransactService.getByUserBuyer().subscribe( (itemsResp: ItemTransactionJson[]) => {
      this.items = itemsResp;
    });
  }

}
