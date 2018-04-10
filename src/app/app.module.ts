import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { SQLite } from '@ionic-native/sqlite';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyTeamsPage } from '../pages/my-teams/my-teams';
import { TournamentsPage } from '../pages/tournaments/tournaments';
import { TeamDetailPage } from '../pages/team-detail/team-detail';
import { TeamsPage } from '../pages/teams/teams';
import { StandingsPage } from '../pages/standings/standings';
import { TeamHomePage } from '../pages/team-home/team-home';
import { GamePage } from '../pages/game/game';
import { EliteApi } from '../providers/elite-api/elite-api';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { UserSettings } from '../providers/user-settings/user-settings';
import { MapPage } from '../pages/map/map';
import { SqlStorage } from '../providers/sql-storage/sql-storage';


@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage,
    TournamentsPage,
    TeamDetailPage,
    TeamsPage,
    StandingsPage,
    GamePage,
    TeamHomePage,
    MapPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot(),
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyCCuM401A8w8HDWbPpmxxOH_qUe1EF-5E4' })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsPage,
    GamePage,
    TeamsPage,
    TeamDetailPage,
    TournamentsPage,
    StandingsPage,
    TeamHomePage,
    MapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EliteApi,
    UserSettings,
    SQLite,
    SqlStorage
  ]
})
export class AppModule {}
