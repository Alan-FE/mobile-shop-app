import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MobilePhonesComponent } from './mobile-phones/mobile-phones.component';
import { MobileSpecificationsComponent } from './mobile-specifications/mobile-specifications.component';
import { CartComponent } from './cart/cart.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: MobilePhonesComponent },
  { path: 'mobile-phones', component: MobilePhonesComponent },
  { path: 'mobile-specifications', component: MobileSpecificationsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
