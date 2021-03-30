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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { PaymentConfirmationComponent } from './payment-confirmation/payment-confirmation.component';
import { SubModuleTitleComponent } from './ADMIN_CONSOLE/sub-module-title/sub-module-title.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { TransactionDialogComponent } from './payment-confirmation/transaction-dialog/transaction-dialog.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AuthenticationService } from './_services/authentication.service';
import { SignInComponent } from './_authComponents/sign-in/sign-in.component';
import { SignUpComponent } from './_authComponents/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './_authComponents/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './_authComponents/verify-email/verify-email.component';
import { UserConsoleComponent } from './ADMIN_CONSOLE/user-console/user-console.component';
import { UserMenuComponent } from './ADMIN_CONSOLE/user-menu/user-menu.component';
import { UserSalesComponent } from './ADMIN_CONSOLE/user-sales/user-sales.component';
import { UserShoppingComponent } from './ADMIN_CONSOLE/user-shopping/user-shopping.component';
import { ItemDiagnosisComponent } from './ADMIN_CONSOLE/item-diagnosis/item-diagnosis.component';
import { ShoppingAdminComponent } from './ADMIN_CONSOLE/shopping-admin/shopping-admin.component';
import { UserFavouritesComponent } from './ADMIN_CONSOLE/user-favourites/user-favourites.component';
import { UserProfileComponent } from './ADMIN_CONSOLE/user-profile/user-profile.component';
import { FrequentAnswersComponent } from './ADMIN_CONSOLE/frequent-answers/frequent-answers.component';
import { ItemHorizontalViewComponent } from './ADMIN_CONSOLE/item-horizontal-view/item-horizontal-view.component';
import { FilterElementsComponent } from './ADMIN_CONSOLE/filter-elements/filter-elements.component';
import { ShoppingFollowUpComponent } from './ADMIN_CONSOLE/shopping-follow-up/shopping-follow-up.component';
import { PurchaseDetailComponent } from './ADMIN_CONSOLE/purchase-detail/purchase-detail.component';
import { InterceptVerificationComponent } from './_authComponents/intercept-verification/intercept-verification.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

const googleAuthConfig = {
  apiKey: "AIzaSyC7A9QWrUGoaGasGz6E2xOWDU5YpfwVKoo",
  authDomain: "baaw-797ba.firebaseapp.com",
  databaseURL: "https://baaw-797ba-default-rtdb.firebaseio.com",
  projectId: "baaw-797ba",
  storageBucket: "baaw-797ba.appspot.com",
  messagingSenderId: "824333940764",
  appId: "1:824333940764:web:f1f229a2fff7e0875c07d9",
  measurementId: "G-GQWWVD43TQ"
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
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    UserConsoleComponent,
    UserMenuComponent,
    UserSalesComponent,
    UserShoppingComponent,
    ItemDiagnosisComponent,
    ShoppingAdminComponent,
    UserFavouritesComponent,
    UserProfileComponent,
    FrequentAnswersComponent,
    ItemHorizontalViewComponent,
    FilterElementsComponent,
    ShoppingFollowUpComponent,
    PurchaseDetailComponent,
    InterceptVerificationComponent,
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
    AngularFireModule.initializeApp(googleAuthConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [
    AuthenticationService,
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    }
  ],
  entryComponents: [
    GenericDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
