import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs';

@Injectable()
export class EliteApi {
  private baseUrl = 'https://elete-schedule-app-i2.firebaseio.com/';
  private currentTourney: any;
  constructor(public http: Http) {}

  getTournaments() {
    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/tournaments.json`)
        .subscribe(res => resolve(res.json()));
    });
  }

  getTournamentData(tourneyId, forceRefresh: boolean = false) : Observable<any> {
   return this.http.get(`${this.baseUrl}/tournaments-data/${tourneyId}.json`)
    .map(response => {
      this.currentTourney = response.json();
      return this.currentTourney;
      //return Observable.of(this.currentTourney);
    })
  }

  getCurrentTourney() {
    return this.currentTourney;
  }

  refreshCurrentTourney(){
    return this.getTournamentData(this.currentTourney.tournament.id, true);
  }

}
