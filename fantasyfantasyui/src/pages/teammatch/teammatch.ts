import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider, Team } from '../../providers/rest/rest';

/**
 * Generated class for the TeammatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teammatch',
  templateUrl: 'teammatch.html',
})
export class TeammatchPage {
currentWeek= "3";
charas= [];
charBench= [];
charas1= ["Lewis", "Kris","Jae"];
charBench1= ["Alfredo","Nick"];
teamName: String;
teamName1="!RGB";
teams = [];
team: Team;


  constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestProvider) {
    let info = this.rest.getUserInfo();
    this.teams = info['teams'];
    this.team = this.teams[0];
    this.teamName = this.team.teamName;
    this.populateCharas()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeammatchPage');
  }

  populateCharas(){
    for(let i=0; i< 3; i++){
      this.charas[i] = this.team.characters[i+1];
    }
    for(let i=3; i< 5; i++){
      this.charBench[i-3] = this.team.characters[i+1];
    }
  }

  public getCharaScore(charaId:number,currentWeek){

  }

  public viewCharacter(id: number){
    this.navCtrl.push('ShowcharacterPage', {
      data: id
    });
  }

}
