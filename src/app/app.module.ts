import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemSearchComponent } from './item-search/item-search.component';
import { ItemListComponent } from './item-list/item-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../app/material-module';
import { HttpClientModule } from '@angular/common/http';
import { CategoryTreeComponent } from './category-tree/category-tree.component';
import { SaleItemComponent } from './sale-item/sale-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemSearchComponent,
    ItemListComponent,
    CategoryTreeComponent,
    SaleItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
