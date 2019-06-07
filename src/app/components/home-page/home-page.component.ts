import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SportsNamesDataService } from '../../services/sports-names-data.service';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SharingDataService } from '../../services/sharing-data.service';
import { UserService } from 'src/app/services/core/user.service';
import { AuthService } from 'src/app/services/core/auth.service';
import { FirebaseUserModel } from 'src/app/services/core/user.model';
import {Location} from '@angular/common';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
public sportsList = [];
public sportsChecked=[]
user: FirebaseUserModel = new FirebaseUserModel();
profileForm: FormGroup;
@Output() public readonly colClicked: EventEmitter<any> = new EventEmitter();

  constructor(private _data:SportsNamesDataService,private router: Router, private sharingService: SharingDataService, public userService: UserService,
    public authService: AuthService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private location: Location) { 
  this.sportsList = []
  this.sportsChecked = []
      
 
    
   
  }

  ngOnInit() {
    this.getData()
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.user = data;
        this.createForm(this.user.name);
      }
    })

   
  }


  createForm(name) {
    this.profileForm = this.fb.group({
      name: [name, Validators.required ]
    });
  }

  save(value){
    this.userService.updateCurrentUser(value)
    .then(res => {
      console.log(res);
    }, err => console.log(err))
  }

  logout(){
    this.authService.doLogout()
    .then((res) => {
      this.location.back();
    }, (error) => {
      console.log("Logout error", error);
    });
  }
  
  public getData(){
    const sportNames = this._data.loadData();
    sportNames.subscribe(result =>{
      this.sportsList = result.data;
      console.log(this.sportsList)
    })
  
  }
  public isClicked(sport){

    const sportKey = sport.key;
    const sportName = sport.details
    console.log(sportKey)
    if(this.sportsChecked.includes(sportKey) !== true){
      this.sportsChecked.push(sportKey)
    }else{
      let index = this.sportsChecked.indexOf(sportKey);
      console.log(index)
      this.sportsChecked.splice(index,1)
    }
    console.log(this.sportsChecked)

  }

 

  submit(){
    console.log(this.sportsChecked)
    this.sharingService.setData(this.sportsChecked)
    this.router.navigate(['/bets'])
  }

}
