import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerServiceComponent } from './customer-service/customer-service.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { LoginComponent } from './login/login.component';
import { MarketPlaceComponent } from './market-place/market-place.component';
import { PaymentConfirmationComponent } from './payment-confirmation/payment-confirmation.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ReturnPolicyComponent } from './return-policy/return-policy.component';
import { SaleItemComponent } from './sale-item/sale-item.component';
import { SignInComponent } from './_authComponents/sign-in/sign-in.component';
import { TermsComponent } from './terms-conditions/terms-conditions.component';
import { AuthGuard } from './_helpers/auth.guard';
import { SignUpComponent } from './_authComponents/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './_authComponents/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './_authComponents/verify-email/verify-email.component';
import { UserConsoleComponent } from './ADMIN_CONSOLE/user-console/user-console.component';

const routes: Routes = [
  { path: 'index', component: HomePageComponent, runGuardsAndResolvers: 'always' },
  { path: '', redirectTo: 'index', pathMatch: 'full', runGuardsAndResolvers: 'always'},
  { path: 'market-place/:inputFilter', component: MarketPlaceComponent },
  { path: 'market-place/:inputFilter/:searchBar', component: MarketPlaceComponent },
  
  { path: 'publish', component: SaleItemComponent, canActivate: [ AuthGuard ] },
  { path: 'item-detail/:itemId', component: ItemDetailComponent},
  { path: 'item-detail', component: ItemDetailComponent},
  { path: 'terms', component: TermsComponent},
  { path: 'privacy', component: PrivacyComponent},
  { path: 'return-policy', component: ReturnPolicyComponent},
  { path: 'customer-service', component: CustomerServiceComponent},
  
  { path: 'register', component: RegisterUserComponent},

  { path: 'login', component: LoginComponent },
  { path: 'sign-in', component: SignInComponent },
  
  { path: 'register-user', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'payment-confirmation/:itemId', component: PaymentConfirmationComponent, canActivate: [ AuthGuard ] },

  { path: 'console/:section', component: UserConsoleComponent, canActivate: [ AuthGuard ] },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
