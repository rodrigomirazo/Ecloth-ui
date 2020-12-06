import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { LoginComponent } from './login/login.component';
import { MarketPlaceComponent } from './market-place/market-place.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ReturnPolicyComponent } from './return-policy/return-policy.component';
import { SaleItemComponent } from './sale-item/sale-item.component';
import { TermsComponent } from './terms-conditions/terms-conditions.component';
import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
  { path: 'index', component: HomePageComponent, runGuardsAndResolvers: 'always' },
  { path: 'login', component: LoginComponent },
  
  { path: '', redirectTo: 'index', pathMatch: 'full', runGuardsAndResolvers: 'always'},
  { path: 'market-place/:inputFilter', component: MarketPlaceComponent },
  { path: 'market-place/:inputFilter/:searchBar', component: MarketPlaceComponent },
  
  { path: 'publish', component: SaleItemComponent, canActivate: [ AuthGuard ] },
  { path: 'item-detail/:itemId', component: ItemDetailComponent},
  { path: 'item-detail', component: ItemDetailComponent},
  { path: 'terms', component: TermsComponent},
  { path: 'privacy', component: PrivacyComponent},
  { path: 'return-policy', component: ReturnPolicyComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
