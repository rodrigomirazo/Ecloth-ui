import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PROFILE_BAAW_PARTNER } from 'src/app/_helpers/constants';
import { User } from 'src/app/_models/User-model';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  private user: User;
  private baawPartner: boolean = false;
  public section: string;
  public selectedMenuOption: string;

  constructor(
    private authService: AuthenticationService,
    private userService: UserService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.user = this.authService.getSessionUser();
    this.baawPartner = this.userService.isBaawPartner(this.user);
    this.route.params.subscribe(params => {
      this.section = params.section;
      this.section.toLowerCase();
    });
  }

  isSelected(section: string) {
    if(section == this.selectedMenuOption) {
      return true;
    }
    return false;
  }

  content() {
    if(this.user.content == PROFILE_BAAW_PARTNER) {
      return true;
    }
    return false;
  }

}
