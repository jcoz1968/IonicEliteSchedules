import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class UserSettings {

  constructor(private storage: Storage) {
    console.log('Hello UserSettingsProvider Provider');
  }

  favoriteTeam(team, tournamentId, tournamentName) {
    let item = {
      team: team,
      tournamentId: tournamentId,
      tournamentName: tournamentName
    };
    this.storage.set(team.id.toString(), JSON.stringify(item));
  }

  unFavoriteTeam(team) {
    this.storage.remove(team.id.toString());
  }

  isFavoriteTeam(teamId: string): Promise<boolean> {
    return this.storage.get(teamId).then(val => val ? true : false);
  }

  getAllFavorites() {
    let results = [];
    this.storage.forEach(data => {
      console.log('***inside foreach***', data);
      results.push(JSON.parse(data));
    });
    return results;
  }

}
