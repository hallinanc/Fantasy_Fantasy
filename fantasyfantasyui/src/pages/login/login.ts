import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { RestProvider } from '../../providers/rest/rest';
 
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: Loading;
  registerCredentials = { email: '', password: '' };
  user ={userName: '', playerName: ''}
 
  constructor(private nav: NavController, private auth: AuthServiceProvider, private restProvider: RestProvider, private alertCtrl: AlertController, private loadingCtrl: LoadingController) { }
 
  public createAccount() {
    this.nav.push('RegisterPage');
  }
  
 
  public login() {
    // this.restProvider
    this.showLoading();
    this.restProvider.getOwner(this.user.userName).then((result) => {
      console.log(result);
      if(result){
        this.nav.setRoot('HomePage');
        
      }else{
        this.showError("Please Enter Valid Information or Register");
      }
    }, (err) => {
      console.log(err);
    });
    
    // this.restProvider.currentUser = this.user;
    // this.showLoading()
    // this.auth.login(this.registerCredentials).subscribe(allowed => {
    //   if (allowed) {        
    //     this.nav.setRoot('HomePage');
    //   } else {
    //     this.showError("Access Denied");
    //   }
    // },
    //   error => {
    //     this.showError(error);
    //   });
  }
 
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
 
  showError(text) {
    // this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: 'Incorrect Account Information',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }
}
