import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharingDataService } from '../../services/sharing-data.service';

@Component({
  selector: 'app-betting-view-home',
  templateUrl: './betting-view-home.component.html',
  styleUrls: ['./betting-view-home.component.css']
})
export class BettingViewHomeComponent implements OnInit {
  checkedData: any;
  constructor(private router: Router, private sharingServie: SharingDataService) { }

  ngOnInit() {
    this.checkedData = this.sharingServie.getData();
    console.log(this.checkedData)
  }

}
