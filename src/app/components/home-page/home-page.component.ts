import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SportsNamesDataService } from '../../services/sports-names-data.service';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SharingDataService } from '../../services/sharing-data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
public sportsList = [];
public sportsChecked=[]
@Output() public readonly colClicked: EventEmitter<any> = new EventEmitter();
  constructor(private _data:SportsNamesDataService,private router: Router, private sharingService: SharingDataService) { 
  this.sportsList = []
  this.sportsChecked = []
      
 
    
   
  }

  ngOnInit() {
    this.getData()

   
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
