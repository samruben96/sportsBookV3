import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/core/auth.service';
import { Location } from '@angular/common';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public user;
  constructor(private authService: AuthService, private location: Location) { 
    this.user = ''
  }

  ngOnInit() {
     this.user = firebase.auth().currentUser.email
  }
  logout() {
    this.authService.doLogout()
      .then((res) => {
        this.location.back();
      }, (error) => {
        console.log("Logout error", error);
      });
  }


}
