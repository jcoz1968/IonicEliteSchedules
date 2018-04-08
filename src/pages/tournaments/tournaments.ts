import { EliteApi } from './../../providers/elite-api/elite-api';
import { MyTeamsPage } from './../my-teams/my-teams';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeamsPage } from '../teams/teams';

@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {
  public tournaments: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private eliteApi: EliteApi) {
  }

  ionViewDidLoad() {
    this.eliteApi.getTournaments().then(data => this.tournaments = data);
  }

  itemTapped($event, tournament) {
    // this.navCtrl.push(MyTeamsPage);
    this.navCtrl.push(TeamsPage, tournament);
  }


}
