import { Component } from '@angular/core';

import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/core/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm();
   }

   createForm() {
     this.registerForm = this.fb.group({
       email: ['', Validators.required ],
       password: ['',Validators.required]
     });
   }

  //  tryFacebookLogin(){
  //    this.authService.doFacebookLogin()
  //    .then(res =>{
  //      this.router.navigate(['/user']);
  //    }, err => console.log(err)
  //    )
  //  }

  //  tryTwitterLogin(){
  //    this.authService.doTwitterLogin()
  //    .then(res =>{
  //      this.router.navigate(['/user']);
  //    }, err => console.log(err)
  //    )
  //  }

  //  tryGoogleLogin(){
  //    this.authService.doGoogleLogin()
  //    .then(res =>{
  //      this.router.navigate(['/user']);
  //    }, err => console.log(err)
  //    )
  //  }

   tryRegister(value){
     this.authService.doRegister(value)
     .then(res => {
       console.log(res);
       this.errorMessage = "";
       this.successMessage = "Your account has been created";
     }, err => {
       console.log(err);
       this.errorMessage = err.message;
       this.successMessage = "";
     })
   }

}