import { StandingsPage } from './../standings/standings';
import { TeamDetailPage } from './../team-detail/team-detail';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MyTeamsPage } from '../my-teams/my-teams';

@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.html',
})
export class TeamHomePage {
  team: any = {};
  teamDetailTab = TeamDetailPage;
  standingsTab = StandingsPage;

  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.team = this.navParams.data;
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad TeamHomePage');
  }

  goHome() {
    // this.navCtrl.push(MyTeamsPage);
    this.navCtrl.popToRoot();
  }

}
