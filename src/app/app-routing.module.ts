import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BettingViewHomeComponent } from './components/betting-view-home/betting-view-home.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { NeedAuthGuard } from './auth.guard';

const routes: Routes = [{path:"", component: LoginPageComponent},{path:"home",component:HomePageComponent, canActivate: [NeedAuthGuard]},{path:"bets", component:BettingViewHomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
