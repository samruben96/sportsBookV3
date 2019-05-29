import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharingDataService } from '../../services/sharing-data.service';
import { GetSportLinesAndTeamDataService } from '../../services/get-sport-lines-and-team-data.service';

@Component({
  selector: 'app-betting-view-home',
  templateUrl: './betting-view-home.component.html',
  styleUrls: ['./betting-view-home.component.css']
})
export class BettingViewHomeComponent implements OnInit {
  checkedData = [];
  bettingInfo = []
  teams = []
  bettingLines = []


  constructor(private router: Router, private sharingServie: SharingDataService, private _data:GetSportLinesAndTeamDataService) { 
    this.bettingInfo = []
    this.teams = []
    this.bettingLines = []
  }

  ngOnInit() {
    this.checkedData = this.sharingServie.getData();
    console.log(this.checkedData)
    this.recieveData(this.checkedData)
  }

  public recieveData(list){
    for(var i =0; i<list.length; i++){
      console.log(list[i])
     const sportLines =  this._data.loadData(list[i]);
     sportLines.subscribe(result =>{
       this.bettingInfo = result.data;
       console.log(this.bettingInfo)
       this.cleanAndGetCertainDataPoints(this.bettingInfo)
     })
    }


  }

  public cleanAndGetCertainDataPoints(bet){
    for(var i = 0; i<bet.length; i++){
      console.log("Teams: "+bet[i].teams)
      this.teams.push(bet[i])
    
      
    }

  }

}


// commence_time: 1559264400
// home_team: "Toronto Raptors"
// sites: (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
// sites_count: 7
// sport_key: "basketball_nba"
// sport_nice: "NBA"
// teams: (2) ["Golden State Warriors", "Toronto Raptors"]
// __proto__: Object
// length: 1
// __proto__: Array(0)
