import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharingDataService } from '../../services/sharing-data.service';
import { GetSportLinesAndTeamDataService } from '../../services/get-sport-lines-and-team-data.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

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
  closeResult: string;
  teamClicked: string;
  teamLine: string;
  moneyLineResult: Number;
  amountBet: any;
  public buttonName:any = "Continue"
  public show:boolean = false;
  constructor(private router: Router, private sharingServie: SharingDataService, private _data:GetSportLinesAndTeamDataService, private modalService: NgbModal) { 
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
      if(bet[i].sites[0].odds !== undefined){
        this.teams.push(bet[i])
      }else{
        break;
      }
    
    
      
    }

  }
  open(content, event: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.teamClicked = (event.target).id
    
    this.teamLine = (event.target.value)
    // this.calculateOdds(event.target.value)
    

   
  }
  closeAndOpen(){
    this.show = !this.show
    if(this.show){
      this.buttonName = "Confirm"
    }else{
      this.router.navigateByUrl('betConfirmed')
      this.modalService.dismissAll()
    }
    // this.modalService.open(content,{ariaLabelledBy: 'modal-basic-title1'})

  }

  calculateOdds(amountVal){
    this.amountBet = amountVal
    console.log(this.teamLine)
    if(+this.teamLine > 0){
      this.moneyLineResult = Math.round(+amountVal * (+this.teamLine/100));
    
      return this.moneyLineResult;
    }else{
      this.moneyLineResult = Math.round(Math.abs(+amountVal/(+this.teamLine/100)));
      
      return this.moneyLineResult;
    }
    
   


    
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
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
