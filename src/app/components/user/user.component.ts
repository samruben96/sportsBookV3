import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/core/user.service';
import { AuthService } from 'src/app/services/core/auth.service';
import { FirebaseUserModel } from 'src/app/services/core/user.model';


@Component({
  selector: 'page-user',
  templateUrl: 'user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  // user: FirebaseUserModel = new FirebaseUserModel();
  // profileForm: FormGroup;

  // constructor(
  //   public userService: UserService,
  //   public authService: AuthService,
  //   private route: ActivatedRoute,
  //   private location : Location,
  //   private fb: FormBuilder
  // ) {

  // }

  // ngOnInit(): void {
  //   this.route.data.subscribe(routeData => {
  //     let data = routeData['data'];
  //     if (data) {
  //       this.user = data;
  //       this.createForm(this.user.name);
  //     }
  //   })
  // }

  // createForm(name) {
  //   this.profileForm = this.fb.group({
  //     name: [name, Validators.required ]
  //   });
  // }

  // save(value){
  //   this.userService.updateCurrentUser(value)
  //   .then(res => {
  //     console.log(res);
  //   }, err => console.log(err))
  // }

  // logout(){
  //   this.authService.doLogout()
  //   .then((res) => {
  //     this.location.back();
  //   }, (error) => {
  //     console.log("Logout error", error);
  //   });
  // }
}