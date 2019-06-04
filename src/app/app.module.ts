import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BettingViewHomeComponent } from './components/betting-view-home/betting-view-home.component';
import { EuropeToUSPipe } from './pipes/europe-to-us.pipe';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    BettingViewHomeComponent,
    EuropeToUSPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
