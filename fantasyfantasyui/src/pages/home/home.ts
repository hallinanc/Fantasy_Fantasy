import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { RestProvider } from '../../providers/rest/rest';
 



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userName: string = '';
  playerName: string = '';
  constructor(private nav: NavController, private restProvider: RestProvider, private auth: AuthServiceProvider) {
    let info = this.restProvider.getUserInfo();
    this.userName = info['userName'];
    this.playerName = info['playerName'];
  }
 
  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot('LoginPage')
    });
  }

  public myTeam() {
    this.nav.push('MyteamPage');
  }

  public teammatch(){
    this.nav.push('TeammatchPage');
  }

  public characterlookup(){
    this.nav.push('CharacterlookupPage');
  }
  
  
}
