import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
export class User {
  teams: object[];
  id: number;
  userName: string;
  playerName: string;
  totalWins: number;
  totalLosses: number;
  totalTies: number;

  
 
  constructor(userName: string, playerName: string, teams:object[]) {
    this.userName = userName;
    this.playerName = playerName;
    this.teams = teams;
  }
}

export class ShowCharacter{
  id: number;
  name: String;
  scores: object[];
  appearances: number;
  seasonTotal: number;
  total: number;
  imgLoc: String;

  constructor(id: number, name: String, scores: object[], appearances: number, seasonTotal: number,total: number, imgLoc:String){
    this.id = id;
    this.name= name;
    this.scores = scores;
    this.appearances = appearances;
    this.seasonTotal =seasonTotal;
    this.total = total;
    this.imgLoc = imgLoc;
  }

  
}

export class Team{
  id: number;
  teamName: String;
  characters: {};
  wins: number;
  losses: number;
  ties: number;
  waiverposition: number;

  constructor(id: number, teamName: String, characters: {}, wins: number, losses: number,ties: number, waiverposition: number){
    this.id = id;
    this.teamName= teamName;
    this.characters = characters;
    this.wins = wins;
    this.losses =losses;
    this.ties = ties;
    this.waiverposition = waiverposition;
  }
}

@Injectable()
export class RestProvider {
  apiUrl = 'https://fantasy-fantasy.herokuapp.com';
  currentUser: User;

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getOwner(info){
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/owners/'+info).subscribe( data => {
        this.handleOwner(data);
        resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }

  handleOwner(data){
    console.log(data);
    this.currentUser = data;
  }

  getOwners() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/owners/all').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  addOwner(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/owners/add', data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  updateTeam(newOrder, teamId:number) {
    console.log(newOrder);
    return new Promise((resolve, reject) => {
      this.http.patch(this.apiUrl+'/teams/'+teamId+'/updateorder', newOrder)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getCharacters() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/characters/all').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getCharacterbyId(id){
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/characters/'+id).subscribe( data => {
        resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }

  public getUserInfo() : User {
    return this.currentUser;
  }

}
