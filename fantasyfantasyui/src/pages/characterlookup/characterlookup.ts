import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShowCharacter, RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the CharacterlookupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-characterlookup',
  templateUrl: 'characterlookup.html',
})
export class CharacterlookupPage {

  searchQuery: string = '';
  items: ShowCharacter[];
  allcharacters: ShowCharacter[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestProvider) {
    this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharacterlookupPage');
  }

  initializeItems() {
    this.rest.getCharacters().then((result:ShowCharacter[]) => {
      console.log(result);
      this.allcharacters = result;
      this.items= this.allcharacters;
    }, (err) => {
      console.log(err);
    });
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.items= this.allcharacters;

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  onCancel(){
    // Reset items back to all of the items
    this.initializeItems();
  }

  public viewCharacter(id: number){
    this.navCtrl.push('ShowcharacterPage', {
      data: id
    });
  }

}
