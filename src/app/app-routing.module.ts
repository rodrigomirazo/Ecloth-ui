import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerServiceComponent } from './customer-service/customer-service.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { MarketPlaceComponent } from './market-place/market-place.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ReturnPolicyComponent } from './return-policy/return-policy.component';
import { SaleItemComponent } from './sale-item/sale-item.component';
import { TermsComponent } from './terms-conditions/terms-conditions.component';

const routes: Routes = [
  { path: 'index', component: HomePageComponent },
  { path: '', redirectTo: 'index', pathMatch: 'full'},
  { path: 'market-place/:inputFilter', component: MarketPlaceComponent },
  { path: 'market-place/:inputFilter/:searchBar', component: MarketPlaceComponent },
  
  { path: 'publish', component: SaleItemComponent },
  { path: 'item-detail/:itemId', component: ItemDetailComponent},
  { path: 'item-detail', component: ItemDetailComponent},
  { path: 'terms', component: TermsComponent},
  { path: 'privacy', component: PrivacyComponent},
  { path: 'return-policy', component: ReturnPolicyComponent},
  { path: 'customer-service', component: CustomerServiceComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
