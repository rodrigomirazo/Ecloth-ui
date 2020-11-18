import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MarketPlaceComponent } from './market-place/market-place.component';
import { SaleItemComponent } from './sale-item/sale-item.component';

const routes: Routes = [
  { path: 'index', component: HomePageComponent },
  { path: '', redirectTo: 'index', pathMatch: 'full'},
  { path: 'market-place/:inputFilter', component: MarketPlaceComponent },
  { path: 'publish', component: SaleItemComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
