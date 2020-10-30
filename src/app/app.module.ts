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

@NgModule({
  declarations: [
    AppComponent,
    ItemSearchComponent,
    ItemListComponent,
    CategoryTreeComponent,
    SaleItemComponent,
    HomeCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
