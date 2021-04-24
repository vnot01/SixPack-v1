import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { strings } from '../../config/strings';

import { Platform, NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  constructor(
    public menuCtrl: MenuController,    
    private platform: Platform,
    private statusBar: StatusBar,
    private router: Router,
    public afAuth: AngularFireAuth,
    public authService: AuthService,
    private splashScreen: SplashScreen
    ) {
      this.initializeApp();
    }

  public strings = strings;

  public innerHeight: any;

  ionViewWillEnter() {
    this.menuCtrl.enable(true, 'customMenu');
   }
   
  ngOnInit() {
    this.innerHeight = window.innerHeight / 3 + 'px';
  }

  openMenu() {
    this.menuCtrl.enable(true, 'customMenu');
    this.menuCtrl.open('customMenu');
  }
  restartApp(){
    // var onError = function(error){
    //   console.error("The following error occurred: "+error);
    // }
    
    // Warm restart
    // cordova.plugins.diagnostic.restart(onError, false);
        
    // Cold restart
    // cordova.plugins.diagnostic.restart(onError, true);
    location.reload();
  }

  initializeApp() {
    this.platform.ready().then( async () => {
      await this.afAuth.user.subscribe(user => {
        if (user) {
          this.router.navigate(['/home']);
        } else {
          this.router.navigate(['/start']);
        }
      }, err => {
        this.router.navigate(['/loader']);
        console.warn(err);
      });
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
      console.info("Success");
    });
  }

}
