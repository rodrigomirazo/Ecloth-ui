import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ecloth-ui';
  categoryId: number;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
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

      this.matIconRegistry.addSvgIcon("circle_active",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/rate/circulos-activo.svg") );

      this.matIconRegistry.addSvgIcon("circle_inactive",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/rate/circulos-inactivo.svg") );
  }

  onCategoryId(categoryId: number) {
    this.categoryId = categoryId;
  }
}
