import { EliteApi } from './../../providers/elite-api/elite-api';
import { MyTeamsPage } from './../my-teams/my-teams';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TeamsPage } from '../teams/teams';

@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {
  public tournaments: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private eliteApi: EliteApi,
    public loadingController: LoadingController) {
  }

  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: 'Getting tournaments...'
      // spinner: 'dots'
    });

    loader.present().then(() => {
      this.eliteApi.getTournaments().then(data => {
        this.tournaments = data;
        loader.dismiss();
      });
    });


  }

  itemTapped($event, tournament) {
    // console.log(tournament);
    this.navCtrl.push(TeamsPage, tournament);
  }


}
