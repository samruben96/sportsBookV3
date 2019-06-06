import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BettingViewHomeComponent } from './components/betting-view-home/betting-view-home.component';



const routes: Routes = [{path:"home",component:HomePageComponent},{path:"bets", component:BettingViewHomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
