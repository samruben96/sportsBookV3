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
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

var config = {
  apiKey: "AIzaSyAQi05eYbceif7qQo-fBGLht1zBxOsGd3A",
  authDomain: "sportsbookaccounts.firebaseapp.com",
  databaseURL: "https://sportsbookaccounts.firebaseio.com",
  projectId: "sportsbookaccounts",
  storageBucket: "sportsbookaccounts.appspot.com",
  messagingSenderId: "589949315220",
  appId: "1:589949315220:web:b2ab316e73dbc9d4"
};
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    BettingViewHomeComponent,
    EuropeToUSPipe,

   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
