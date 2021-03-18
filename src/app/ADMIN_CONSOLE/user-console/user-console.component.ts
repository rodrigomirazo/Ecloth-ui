import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/category-tree/category.service';
import { ItemCategoryModel } from 'src/app/_models/main-categories-model';
import { User } from 'src/app/_models/User-model';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-user-console',
  templateUrl: './user-console.component.html',
  styleUrls: ['./user-console.component.css']
})
export class UserConsoleComponent implements OnInit {

  private baawPartner: boolean = false;
  public itemType: ItemCategoryModel[];
  public section: string;
  public itemId: number;
  private user: User;

  constructor(
    private authService: AuthenticationService,
    private categoryService: CategoryService,
    private userService: UserService,
    private route: ActivatedRoute,
  ) { }
  
  ngOnInit(): void {
    this.getCategoryTypes();
    this.user = this.authService.getSessionUser();
    this.baawPartner = this.userService.isBaawPartner(this.user);
    this.route.params.subscribe(params => {
      this.section = params.section;
      this.section.toLowerCase();

      if(
        this.section.toLocaleLowerCase() == ("shoppingFollowUp").toLocaleLowerCase() ||
        this.section.toLocaleLowerCase() == ("purchaseDetail").toLocaleLowerCase()
        ) {
        this.itemId = params.itemId;
        console.log(this.itemId);
      }

    });
  }

  getCategoryTypes(): void {
    this.categoryService.getCategoryTypes().subscribe((itemType: ItemCategoryModel[]) => {
      this.itemType = itemType.filter(cat => cat.subCategoryName == "Bicicletas")[0].subCategories;
      
    });
  }

}
