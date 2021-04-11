import { Component, Input, OnInit } from '@angular/core';
import { FloatingCharsService } from 'src/app/floating-chars/floating-chars.service';
import { UserItem } from 'src/app/_models/Item-model';
import { ItemTransactionJson } from 'src/app/_models/Item-transaction-model-json';
import { ItemCategoryModel } from 'src/app/_models/main-categories-model';
import { User } from 'src/app/_models/User-model';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { ItemTransactionService } from 'src/app/_services/item-transaction.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'user-favourites',
  templateUrl: './user-favourites.component.html',
  styleUrls: ['./user-favourites.component.css']
})
export class UserFavouritesComponent implements OnInit {

  @Input()
  public itemType: ItemCategoryModel[];
  
  public itemsTranaction: ItemTransactionJson[];
  public items: UserItem[];
  private user: User;

  constructor(
    private authService: AuthenticationService,
    private itemTransactService: ItemTransactionService,
    private floatingCharsService: FloatingCharsService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {

    this.user = this.authService.getSessionUser();
    this.userService.userFavorites(this.user).subscribe( (itemsResp: any[]) => {
      console.log(itemsResp);
      this.items = itemsResp;
    });
    
  }

  tranasactionWrapper(item: any) {
    return {
      item: item
    }
  }

}
