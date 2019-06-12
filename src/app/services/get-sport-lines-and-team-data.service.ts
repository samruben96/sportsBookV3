import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from '../../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetSportLinesAndTeamDataService {

  constructor(private http: HttpClient) { }

  public loadData(value) {
    return this.http.get(`https://api.the-odds-api.com/v3/odds?sport=${value}&region=us&mkt=h2h&apiKey=9876ae80f035fbf0a1891c09d81e60cf`
    ).pipe(map(result => (<any>result)))
  }
}
