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
    SaleItemUploadImgComponent
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
    SwiperModule
  ],
  providers: [{
    provide: SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
