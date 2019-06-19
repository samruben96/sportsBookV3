import { Component, OnInit, Directive, Input, Output, EventEmitter, ViewChildren, QueryList } from '@angular/core';
import { GetFirebaseDataService } from 'src/app/services/get-firebase-data.service';
import { Bets } from 'src/app/models/bets.model';




@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})

export class AdminPageComponent implements OnInit {

  bets: Bets[];
  
  public betsAdmin
  constructor(private betPageService:GetFirebaseDataService) { }

  ngOnInit() {
    this.betPageService.getBets().subscribe(data=>{
      this.bets = data.map(e=>{
        return{
          id: e.payload.doc.id,
          betInfo: e.payload.doc.data(),
        
        } as Bets;
        
      })
      console.log(this.bets[0].betInfo)
    })
  }



}
