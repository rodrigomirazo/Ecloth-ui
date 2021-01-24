import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../item-list/item.service';
import { UserItem } from '../_models/Item-model';
import { ItemCategoryModel } from '../_models/main-categories-model';
import { User } from '../_models/User-model';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'payment-confirmation',
  templateUrl: './payment-confirmation.component.html',
  styleUrls: ['./payment-confirmation.component.css']
})
export class PaymentConfirmationComponent implements OnInit {

  private item: UserItem;
  private user: User;
  private validSession: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {

    // 1. Get Current Filters
    this.route.params.subscribe(params => {

      this.user = this.authService.getSessionUser();

      if (this.user) {
        if (params.itemId) {
          this.itemService.getById(params.itemId).subscribe( (userItemResp: UserItem) => {
            this.item = userItemResp;
            this.validSession = true;
          });
        }
      }
      
    });
  }
  
  

}
