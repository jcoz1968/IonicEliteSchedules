import { UserSettings } from './../../providers/user-settings/user-settings';
import { EliteApi } from './../../providers/elite-api/elite-api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TournamentsPage } from '../tournaments/tournaments';
import { TeamHomePage } from '../team-home/team-home';

@Component({
  selector: 'page-my-teams',
  templateUrl: 'my-teams.html'
})
export class MyTeamsPage {
  favorites = [];
  constructor(
    private nav: NavController,
    private loadingController: LoadingController,
    private userService: UserSettings,
    private eliteApi: EliteApi
  ) {}

  favoriteTapped($event, favorite){
    let loader = this.loadingController.create({
        content: 'Getting data...',
        dismissOnPageChange: true
    });
    loader.present();
    this.eliteApi.getTournamentData(favorite.tournamentId)
        .subscribe(t => this.nav.push(TeamHomePage, favorite.team));
  }

  goToTournaments(){
      this.nav.push(TournamentsPage);
  }

  ionViewDidEnter(){
    // this.favorites = this.userService.getAllFavorites();
    this.userService.getAllFavorites().then(favs => this.favorites = favs);
  }

}
