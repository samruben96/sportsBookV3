import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SportsNamesDataService {

  constructor(private http: HttpClient) { }


  public loadData(): any {
    return this.http
      .get(
        "https://api.the-odds-api.com/v3/sports/?apiKey=9876ae80f035fbf0a1891c09d81e60cf"
      )
      .pipe(map(result => (<any>result)));
  }
}

