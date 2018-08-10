import { Component } from '@angular/core';
import { NavController, AlertController, IonicPage } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { RestProvider } from '../../providers/rest/rest';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  // createSuccess = false;
  // registerCredentials = { email: '', password: '' };
  user ={userName: '', playerName: ''}

  constructor(private nav: NavController, private auth: AuthServiceProvider, private restProvider: RestProvider, private alertCtrl: AlertController) { }

  public saveUser() {
    console.log(this.user)
    this.restProvider.addOwner(this.user).then((result) => {
      console.log(result);
      this.nav.setRoot(LoginPage);
    }, (err) => {
      console.log(err);
    });

  }

  // public register() {
  //   this.auth.register(this.registerCredentials).subscribe(success => {
  //     if (success) {
  //       this.createSuccess = true;
  //       this.showPopup("Success", "Account created.");
  //     } else {
  //       this.showPopup("Error", "Problem creating account.");
  //     }
  //   },
  //     error => {
  //       this.showPopup("Error", error);
  //     });
  // }
 
  // showPopup(title, text) {
  //   let alert = this.alertCtrl.create({
  //     title: title,
  //     subTitle: text,
  //     buttons: [
  //       {
  //         text: 'OK',
  //         handler: data => {
  //           if (this.createSuccess) {
  //             this.nav.popToRoot();
  //           }
  //         }
  //       }
  //     ]
  //   });
  //   alert.present();
  // }
}
