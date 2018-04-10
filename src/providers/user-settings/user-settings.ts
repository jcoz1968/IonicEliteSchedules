import { SqlStorage } from './../sql-storage/sql-storage';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const win: any = window;
@Injectable()
export class UserSettings {
  private sqlMode = false;

  constructor(private storage: Storage, private sql: SqlStorage) {
    if(win.sqlitePlugin) {
      this.sqlMode = true;
    } else {
      console.log('SQLite plugin not installed.  Falling back to Ionic Storage')
    }
  }

  favoriteTeam(team, tournamentId, tournamentName) {
    let item = {
      team: team,
      tournamentId: tournamentId,
      tournamentName: tournamentName
    };
    if (this.sqlMode) {
      this.sql.set(team.id.toString(), JSON.stringify(item));
    } else {
      this.storage.set(team.id.toString(), JSON.stringify(item));
    }
  }

  unFavoriteTeam(team) {
    if (this.sqlMode) {
      this.sql.remove(team.id.toString());
    } else {
      this.storage.remove(team.id.toString());
    }
  }

  isFavoriteTeam(teamId: string): Promise<boolean> {
    // return this.storage.get(teamId).then(val => val ? true : false);
    if (this.sqlMode) {
      return this.sql.get(teamId.toString()).then(val => val ? true : false);
    } else {
      return new Promise(resolve => resolve(this.storage.get(teamId.toString())
      .then(val => val ? true : false)));
    }
  }

  getAllFavorites(): Promise<any> {
    if (this.sqlMode) {
      return this.sql.getAll();
    } else {
      return new Promise(resolve => {
        let results = [];
        this.storage.forEach(data => {
          console.log('***inside foreach***', data);
          results.push(JSON.parse(data));
        });
        return resolve(results);
      })
    }
  }

  initStorage(): Promise<any> {
    if (this.sqlMode) {
      return this.sql.initializeDatabase();
    } else {
      return new Promise(resolve => resolve());
    }
  }

}
