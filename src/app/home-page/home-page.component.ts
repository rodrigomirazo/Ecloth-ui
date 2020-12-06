import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  ngOnInit() {
  }

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private _router: Router
  ){
      this.matIconRegistry.addSvgIcon("love_inactive",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/home/icon_love_inactive.svg") );

      this.matIconRegistry.addSvgIcon("bell_inactive",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/home/icon_bell_inactive.svg") );

      this.matIconRegistry.addSvgIcon("user_inactive",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/home/icon_user_inactive.svg") );

      this.matIconRegistry.addSvgIcon("car_inactive",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/home/icon_car_inactive.svg") );

      this.matIconRegistry.addSvgIcon("love_active",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/home/icon_love_active.svg") );

      this.matIconRegistry.addSvgIcon("bell_active",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/home/icon_bell_active.svg") );

      this.matIconRegistry.addSvgIcon("user_active",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/home/icon_user_active.svg") );

      this.matIconRegistry.addSvgIcon("car_active",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/home/icon_car_active.svg") );

  }

}
