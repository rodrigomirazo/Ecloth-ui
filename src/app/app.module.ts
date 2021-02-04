import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as $ from "jquery";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemSearchComponent } from './item-search/item-search.component';
import { ItemListComponent } from './item-list/item-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../app/material-module';
import { HttpClientModule } from '@angular/common/http';
import { CategoryTreeComponent } from './category-tree/category-tree.component';
import { SaleItemComponent } from './sale-item/sale-item.component';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { HomeNewsComponent } from './home-news/home-news.component';
import { HomeCategoriesComponent } from './home-categories/home-categories.component';
import { MarketPlaceComponent } from './market-place/market-place.component';
import { HeaderComponent } from './header/header.component';
import { MenuDropDawnComponent } from './menu-drop-dawn/menu-drop-dawn.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CatalogSelectorComponent } from './form-elements/catalog-selector/catalog-selector.component';
import { SaleItemUploadImgComponent } from './sale-item-upload-img/sale-item-upload-img.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemImagePreviewComponent } from './sale-item-upload-img/item-image-preview/item-image-preview.component';
import { SaleItemInputTextComponent } from './sale-item-upload-img/sale-item-input-text/sale-item-input-text.component';
import { RateComponent } from './form-elements/rate/rate.component';
import { TermsComponent } from './terms-conditions/terms-conditions.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ReturnPolicyComponent } from './return-policy/return-policy.component';
import { LoginComponent } from './login/login.component';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { GenericDialogComponent } from './generic-dialog/generic-dialog.component';
import { CustomerServiceComponent } from './customer-service/customer-service.component';
import { MatFormFieldModule, MatSelectModule } from '@angular/material';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { PaymentConfirmationComponent } from './payment-confirmation/payment-confirmation.component';
import { SubModuleTitleComponent } from './ADMIN_CONSOLE/sub-module-title/sub-module-title.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { TransactionDialogComponent } from './payment-confirmation/transaction-dialog/transaction-dialog.component';
import { RegisterUserComponent } from './register-user/register-user.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    AppComponent,
    ItemSearchComponent,
    ItemListComponent,
    CategoryTreeComponent,
    SaleItemComponent,
    HomeCarouselComponent,
    HomeFooterComponent,
    HomeNewsComponent,
    HomeCategoriesComponent,
    MarketPlaceComponent,
    HeaderComponent,
    MenuDropDawnComponent,
    HomePageComponent,
    CatalogSelectorComponent,
    SaleItemUploadImgComponent,
    ItemDetailComponent,
    ItemImagePreviewComponent,
    SaleItemInputTextComponent,
    RateComponent,
    TermsComponent,
    PrivacyComponent,
    ReturnPolicyComponent,
    LoginComponent,
    //ErrorInterceptor
    GenericDialogComponent,
    CustomerServiceComponent,
    PaymentConfirmationComponent,
    SubModuleTitleComponent,
    TransactionDialogComponent,
    RegisterUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SlickCarouselModule,
    SwiperModule,
    MatFormFieldModule,
    NgxMatSelectSearchModule,
    NgxPayPalModule,
  ],
  providers: [{
    provide: SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG
  }],
  entryComponents: [
    GenericDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
