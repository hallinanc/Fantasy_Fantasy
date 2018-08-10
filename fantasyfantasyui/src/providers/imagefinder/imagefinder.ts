import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ImagefinderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
export class List{
  items: Item[];
  basepath: String;
  offset: string;
  constructor(items: Item[], basepath: String, offset: string){
    this.items = items;
    this.basepath = basepath;
    this.offset = offset;
  }
}

export class Item{
  id: String;
  title: String;
  url:String;
  ns: String;
  constructor(id: String, title:String, url:String, ns:String){
    this.id = id;
    this.title = title;
    this.url = url;
    this.ns = ns;
  }
}

export class Imager{
  thumbnail: String;
  constructor(thumbnail:String){
    this.thumbnail = thumbnail;
  }
}
@Injectable()
export class ImagefinderProvider {
  apiUrl = 'http://gameofthrones.wikia.com/api/v1/Articles/';
  offset="";
  id: String;
  imageURL: String;
  checking:Boolean;

  constructor(public http: HttpClient) {
    console.log('Hello ImagefinderProvider Provider');
  }

  getCharacterImage(info){
    return new Promise(resolve => {
        console.log(this.apiUrl+"List?limit=50&offset="+this.offset);
      this.http.get(this.apiUrl+"List?limit=50&offset="+this.offset).subscribe( (data:List) => {
        console.log("test");  
        data.items.forEach(element => {
          if(element.title == info){
            this.id = element.id;
            this.checking = false;
          }
        });
        this.offset = data.offset;
        resolve(this.id);
        }, err => {
          console.log(err);
        });
    });
  }
  getCharacterImageById(id){
    return new Promise(resolve => {
      this.http.get(this.apiUrl+"Details?ids="+id+"&abstract=100&width=200&height=200").subscribe( (data:Imager) => {
        this.imageURL= data.thumbnail;
        resolve(this.imageURL);
        }, err => {
          console.log(err);
        });
    });
    
  }

  getImageURL():String{
      return this.imageURL;
  }
}
