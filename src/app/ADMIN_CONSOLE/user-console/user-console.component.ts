import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  public section: string;
  private user: User;

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

}
