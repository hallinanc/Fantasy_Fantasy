import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider, ShowCharacter } from '../../providers/rest/rest';
import { ImagefinderProvider } from '../../providers/imagefinder/imagefinder';

/**
 * Generated class for the ShowcharacterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-showcharacter',
  templateUrl: 'showcharacter.html',
})
export class ShowcharacterPage {
disguy: ShowCharacter;
  constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestProvider, public image: ImagefinderProvider) {
    this.disguy= new ShowCharacter(0,'',null, 0, 0, 0, "")
    this.getCharacter();
    
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowcharacterPage');
  }

  getCharacter(){
    this.rest.getCharacterbyId(this.navParams.get('data')).then((result:ShowCharacter) => {
      console.log(result);
      this.disguy = result;
      // this.getCharacterImage();
    }, (err) => {
      console.log(err);
    });
  }

  public getCharacterImage(){
    this.image.getCharacterImage(this.disguy.name).then((result:String) =>{
      this.image.getCharacterImageById(result).then((outcome:String) =>{
        this.disguy.imgLoc = outcome;
      });
    });
  }

  public nameSplitter():String{
    let pieces = this.disguy.name.split(" ");
    let answer = pieces.join("_");
    return answer;
  }

}
