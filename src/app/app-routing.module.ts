import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/core/auth.guard';

import { UserResolver } from './components/user/user.resolver';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BettingViewHomeComponent } from './components/betting-view-home/betting-view-home.component';
import { BettingConfirmationPageComponent } from './components/betting-confirmation-page/betting-confirmation-page.component';



export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomePageComponent,  resolve: { data: UserResolver}},
  {path: 'bets', component:BettingViewHomeComponent, resolve: { data: UserResolver}},
  {path: 'betConfirmed', component:BettingConfirmationPageComponent, resolve: { data: UserResolver}}
];   
@NgModule({
  imports: [RouterModule.forRoot(rootRouterConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
