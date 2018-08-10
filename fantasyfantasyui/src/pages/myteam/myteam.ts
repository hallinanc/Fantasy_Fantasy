import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider, ShowCharacter, Team } from '../../providers/rest/rest';

/**
 * Generated class for the MyteamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myteam',
  templateUrl: 'myteam.html',
})
export class MyteamPage {
  teams= [];
  team: Team;
  charas= [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestProvider) {
    let info = this.rest.getUserInfo();
    this.teams = info['teams'];
    this.team = this.teams[0];
    this.populateCharas();
  }

  populateCharas(){
    for(let i=0; i< 5; i++){
      this.charas[i] = this.team.characters[i+1];
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyteamPage');
  }

  public updateTeam(){
    
    for(let i=0; i< 5; i++){
      this.team.characters[i+1]=this.charas[i];
    }
    this.rest.updateTeam(this.team.characters, this.team.id).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  }

  public viewCharacter(id: number){
    this.navCtrl.push('ShowcharacterPage', {
      data: id
    });
  }

}
