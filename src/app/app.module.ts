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
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './components/login/login.component';

import { AuthGuard } from './services/core/auth.guard';
import { UserService } from './services/core/user.service';
import { FirebaseUserModel } from './services/core/user.model';
import { UserResolver } from './components/user/user.resolver';
import { BettingConfirmationPageComponent } from './components/betting-confirmation-page/betting-confirmation-page.component';
import { PendingBetsComponent } from './components/pending-bets/pending-bets.component';
import { LiveScoreComponent } from './components/live-score/live-score.component';
import { AdminPageComponent } from './components/admin/admin-page/admin-page.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    BettingViewHomeComponent,
    EuropeToUSPipe,
    LoginComponent,
    BettingConfirmationPageComponent,
    PendingBetsComponent,
    LiveScoreComponent,
    AdminPageComponent,


   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features

  ],
  providers: [AuthGuard, FirebaseUserModel, UserService, UserResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
