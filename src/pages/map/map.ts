import { Component } from '@angular/core';
import { EliteApi } from './../../providers/elite-api/elite-api';
import { NavParams } from 'ionic-angular';

declare var window: any;
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  public map: any = {};

  constructor(private eliteApi: EliteApi, public navParams: NavParams) {
    console.log(this.navParams.data);
  }

  ionViewDidLoad() {
    let games = this.navParams.data;
    let tourneyData = this.eliteApi.getCurrentTourney();
    let location  = tourneyData.locations[games.locationId];
    // console.log(location);
    this.map = {
      lat: location.latitude,
      lng: location.longitude,
      zoom: 12,
      markerLabel: games.location
    };
  }

  goToDirections() {
    window.location = `geo:${this.map.lat},${this.map.lng};u=35;`;
  }

}
